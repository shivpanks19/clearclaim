import { GetServerSideProps, NextPage } from 'next';
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
	categoryList,
	courseList
}) => {

	return (
		<div>
			<Navbar
				courseList={courseList}
			/>

			{/* Hero */}
			<BlogListHero
				headline={headline}
				featuredBlog={blogList[0]}
			/>

			{/* SearchBar */}
			<SearchBar
				onChange={(e) => { console.log('search, e', e) }}
			/>

			{/* Categories */}
			<CategoryFilter categoryList={categoryList} />

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
	categoryList: ContentCategory[];
	courseList: Course[];
};

export const getServerSideProps: GetServerSideProps = async ({
	locale,
	query
}: Record<string, any>) => {
	const blogPageInfo = await BlogService.getBlogsStaticData(locale, '*');
	const blogList = await BlogService.getBlogs(locale, '*', { start: query?.start, limit: 4, contentCategory: query?.contentCategory });
	const categoryList = await BlogService.getBlogCategories(locale);
	const courseList = await CourseService.getCourseList(locale, '*');

	return {
		props: {
			...blogPageInfo.data.attributes,
			blogList: blogList.data.map((blog) => ({
				...blog.attributes,
				id: blog.id,
				thumbnail: blog.attributes.thumbnail?.data.attributes,
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