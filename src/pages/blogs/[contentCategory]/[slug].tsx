import { GetServerSideProps, NextPage } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlogDetailHero from '@/components/blogs/BlogDetailHero';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CategoryFilter from '@/components/blogs/CategoryFilter';
import PrevNextPost from '@/components/blogs/PrevNextPost';
import BlogBody from '@/components/blogs/BlogBody';
import BlogService from '@/services/blogs';
import CourseService from '@/services/course';
import { Course } from '@/services/course/types';
import { Blog, ContentCategory } from '@/services/blogs/types';


const BlogListPage: NextPage<BlogListPageProps> = ({
	headline,
	// blog,
	blogList,
	categoryList,
	courseList
}) => {

	return (
		<div>
			<Navbar
				courseList={courseList}
			/>

			{/* Hero */}
			<BlogDetailHero
				headline={blogList[0].title}
			/>

			{/* BlogBody */}
			<BlogBody
				headline={'This is the title'}
				content={blogList[0].content}
				categoryList={categoryList}
			/>

			{/* Categories */}
			<CategoryFilter categoryList={categoryList} />

			{/* PrevNextPost */}
			<PrevNextPost blogList={blogList} />

			{/* Footer */}
			<Footer />
		</div>
	);
};

type BlogListPageProps = {
	headline: string;
	// blog: Blog;
	blogList: Blog[];
	categoryList: ContentCategory[];
	courseList: Course[];
};

export const getServerSideProps: GetServerSideProps = async ({
	locale,
	query,
	params
}: Record<string, any>) => {
	console.log('query', query);
	console.log('params', params);
	const blogPageInfo = await BlogService.getBlogsStaticData(locale, '*');
	const blogList = await BlogService.getBlogs(locale, '*', { start: query?.start, limit: 4, contentCategory: query?.contentCategory });
	// const blog = await BlogService.getBlogBySlug(params.slug, locale);
	const categoryList = await BlogService.getBlogCategories(locale);
	const courseList = await CourseService.getCourseList(locale, '*');

	return {
		props: {
			...blogPageInfo.data.attributes,
			// blog,
			blogList: blogList.data.map((blog) => ({
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