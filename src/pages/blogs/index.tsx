import { GetStaticProps, NextPage } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlogListHero from '@/components/blogs/BlogListHero';
import SocialButtonList from '@/components/common/SocialButtonList';

import BlogList from '@/components/blogs/BlogList';
import SearchBar from '@/components/common/SearchBar';
import CategoryFilter from '@/components/blogs/CategoryFilter';
import BlogService from '@/services/blogs';
import CourseService from '@/services/course';
import { Course } from '@/services/course/types';
import { Blog, ContentCategory } from '@/services/blogs/types';


const BlogListPage: NextPage<BlogListPageProps> = ({
	headline,
	categoryList,
	featuredBlog,
	courseList,
	metaTitle,
	metaDescription
}) => {
	const [q, setQ] = useState(null);
	const [category, setCategory] = useState<number>(null);
	const [_blogList, setBlogList] = useState<Blog[]>([]);
	const [_featuredBlog, setFeaturedBlog] = useState<Blog>(featuredBlog);


	useEffect(() => {
		(async () => {
			const blogList = await BlogService.getBlogs('', '*', { start: 0, limit: 4, contentCategoryId: category, _q: q });
			if (!_featuredBlog) {
				setFeaturedBlog(blogList[0])
			}
			const parsedBlogList: Blog[] = blogList.data.map((blog) => ({
				...blog.attributes,
				id: blog.id,
				thumbnail: { url: blog.attributes.thumbnail?.data.attributes.url },
				contentCategory: blog.attributes.content_category?.data.attributes,
			}));
			setBlogList(parsedBlogList);
		})()
	}, [q, category]);

	return (
		<div className='relative'>
			<Head>
				{metaTitle && (
					<title>{metaTitle}</title>
				)}
				{metaDescription && (
					<meta name='description' content={metaDescription} />
				)}
			</Head>
			<SocialButtonList />
			<Navbar
				courseList={courseList}
			/>

			{/* Hero */}
			<BlogListHero
				headline={headline}
				featuredBlog={featuredBlog}
			/>

			{/* SearchBar */}
			<SearchBar
				onChange={(e) => setQ(e.target.value)}
			/>

			{/* Categories */}
			<CategoryFilter categoryList={categoryList} currentCategory={category} onCategorySelect={(cat) => setCategory(cat)} />

			{/* BlogList */}
			<BlogList
				blogList={_blogList}
			/>

			{/* Footer */}
			<Footer />
		</div>
	);
};

type BlogListPageProps = {
	headline: string;
	blogList: Blog[];
	featuredBlog: Blog | null;
	categoryList: ContentCategory[];
	courseList: Course[];
	metaTitle: string;
	metaDescription: string;
};

export const getStaticProps: GetStaticProps = async ({ locale }: Record<string, any>) => {
	const blogPageInfo = await BlogService.getBlogsStaticData(locale, '*');
	const categoryList = await BlogService.getBlogCategories(locale);
	const courseList = await CourseService.getCourseList(locale, '*');

	let featuredBlog = null;
	//Check if any blog is featured
	if (blogPageInfo.data.attributes.featuredBlog.data) {
		featuredBlog = await BlogService.getBlogBySlug(blogPageInfo.data.attributes.featuredBlog.data?.attributes.slug, locale, '*');
	}

	return {
		props: {
			...blogPageInfo.data.attributes,
			featuredBlog: {
				...featuredBlog.data.attributes,
				contentCategory: featuredBlog.data.attributes.content_category.data.attributes,
				thumbnail: { url: featuredBlog.data.attributes.thumbnail?.data.attributes.url },
			},
			categoryList: categoryList.data.map((category) => ({
				...category.attributes,
				id: category.id,
			})),
			courseList: courseList.data.map((course) => ({
				...course.attributes,
				id: course.id,
			})),

		}
	};
};

export default BlogListPage;