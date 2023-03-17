import { GetServerSideProps, NextPage } from 'next';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Routes from '@/utils/routes';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlogListHero from '@/components/blogs/BlogListHero';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BlogList from '@/components/blogs/BlogList';
import SearchBar from '@/components/common/SearchBar';
import CategoryFilter from '@/components/blogs/CategoryFilter';
import BlogService from '@/services/blogs';
import CourseService from '@/services/course';
import { Course } from '@/services/course/types';
import { Blog, ContentCategory } from '@/services/blogs/types';


const BlogListPage: NextPage<BlogListPageProps> = ({
	headline,
	blogList,
	featuredBlogList,
	categoryList,
	courseList
}) => {
	const router = useRouter();
	const [q, setQ] = useState(null);
	const [category, setCategory] = useState(null);
	let featuredBlog;
	if (featuredBlogList?.length > 0) {
		featuredBlog = featuredBlogList[0]
	} else {
		featuredBlog = blogList[0]
	}

	useEffect(() => {
		router.push(Routes.blogs(undefined, q, category), undefined, { scroll: false })
	}, [category, q]);

	return (
		<div>
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
			<CategoryFilter categoryList={categoryList} onCategorySelect={(cat) => setCategory(cat)} />

			{/* BlogList */}
			<BlogList
				blogList={blogList}
			/>

			{/* Footer */}
			<Footer />
		</div>
	);
};

type BlogListPageProps = {
	headline: string;
	blogList: Blog[];
	featuredBlogList: Blog[];
	categoryList: ContentCategory[];
	courseList: Course[];
};

export const getServerSideProps: GetServerSideProps = async ({
	locale,
	query
}: Record<string, any>) => {
	const blogPageInfo = await BlogService.getBlogsStaticData(locale, '*');
	const categoryList = await BlogService.getBlogCategories(locale);
	const currentCategory = categoryList.data.map((category) => ({
		...category.attributes,
		id: category.id,
	}))?.filter((cat) => cat.slug === query?.contentCategory)[0]
	const blogList = await BlogService.getBlogs(locale, '*', { start: query?.start, limit: 4, contentCategoryId: currentCategory?.id, _q: query?._q });
	let featuredBlogList = await BlogService.getBlogs(locale, '*', { featured_eq: true });
	const courseList = await CourseService.getCourseList(locale, '*');
	if (featuredBlogList?.data.length === 0) {
		featuredBlogList = blogList
	}
	return {
		props: {
			...blogPageInfo.data.attributes,
			blogList: blogList.data.map((blog) => ({
				...blog.attributes,
				id: blog.id,
				thumbnail: blog.attributes.thumbnail?.data.attributes,
				contentCategory: blog.attributes.content_category?.data.attributes,
			})),
			featuredBlogList: featuredBlogList.data.map((blog) => ({
				...blog.attributes,
				id: blog.id,
				thumbnail: blog.attributes.thumbnail?.data.attributes,
				contentCategory: blog.attributes.content_category?.data.attributes,
			})),
			categoryList: categoryList.data.map((category) => ({
				...category.attributes,
				id: category.id,
			})),
			courseList: courseList.data.map((course) => ({
				...course.attributes,
				id: course.id,
			})),
			...(await serverSideTranslations(locale, ['common', 'home']))
		}
	};
};

export default BlogListPage;