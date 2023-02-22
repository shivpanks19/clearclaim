import { GetServerSideProps, NextPage } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlogListHero from '@/components/blogs/BlogListHero';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BlogList from '@/components/blogs/BlogList';
import BlogService from '@/services/blogs';
import { Blog, ContentCategory, TBlogListPageData } from '@/services/blogs/types';


const BlogListPage: NextPage<BlogListPageProps> = ({
	headline,
	blogList
}) => {

	return (
		<div>
			<Navbar />

			{/* Hero */}
			<BlogListHero
				headline={headline}
				featuredBlog={blogList[0]}
			/>

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
};

export const getServerSideProps: GetServerSideProps = async ({
	locale,
	query
}: Record<string, any>) => {
	const blogPageInfo = await BlogService.getBlogsStaticData(locale, '*');
	const blogList = await BlogService.getBlogs(locale, '*', { start: query?.start, limit: 4, contentCategory: query?.contentCategory });
	console.log('bl', blogList.data[0].attributes);
	return {
		props: {
			...blogPageInfo.data.attributes,
			blogList: blogList.data.map((blog) => ({
				...blog.attributes,
				id: blog.id,
				thumbnail: blog.attributes.thumbnail?.data.attributes,
			})),
			...(await serverSideTranslations(locale, ['common', 'home']))
		}
	};
};

export default BlogListPage;