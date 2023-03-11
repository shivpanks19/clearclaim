import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Routes from '@/utils/routes';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionHeadline from '@/components/common/SectionHeadline';
import BlogBody from '@/components/blogs/BlogBody';
import BlogList from '@/components/blogs/BlogList';
import BlogDetailHero from '@/components/blogs/BlogDetailHero';
import CategoryFilter from '@/components/blogs/CategoryFilter';
import TableOfContents from '@/components/blogs/TableOfContents';

import BlogService from '@/services/blogs';
import CourseService from '@/services/course';
import { Course } from '@/services/course/types';
import { Blog, ContentCategory } from '@/services/blogs/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import MiniBlogList from '@/components/blogs/MiniBlogList';


const BlogListPage: NextPage<BlogListPageProps> = ({
	blog,
	blogList,
	categoryList,
	courseList
}) => {
	const router = useRouter();

	return (
		<div>
			<Navbar
				courseList={courseList}
			/>
			<div className='xl:w-76 grid grid-cols-1 lg:grid-cols-4 mx-auto px-5 gap-8'>
				<div className=' md:gap-8 mb-9 col-span-3'>
					{/* Hero */}
					<BlogDetailHero
						headline={blog.title}
						heroImage={blog.thumbnail}
						contentCategory={blog.contentCategory}
						readingTime={blog.readingTime}
						publishedAt={blog.publishedAt}
					/>
					<TableOfContents headings={[
						{
							title: 'Introduction',
							id: 'introduction',
						},
						{
							title: 'Background',
							id: 'background',
						},
						{
							title: 'Implementation',
							id: 'implementation',
						},
						{
							title: 'Conclusion',
							id: 'conclusion',
						},
					]} />
					{/* BlogBody */}
					<BlogBody
						headline={'This is the title'}
						content={blog.content}
						categoryList={categoryList}
					/>
				</div>
				{/* Right sidebar */}
				<div className="col">
					<div className="promotion relative w-80 lg:w-85 h-154 lg:mt-24 mb-10 md:mb-20">
						<Image
							src='/img/promotion.png'
							fill
							sizes='(max-width: 768px) 95vw,
						(max-width: 1200px) 50vw,
						33vw'
							alt='Blog Hero'
						/>
					</div>
					<MiniBlogList
						blogList={blogList}
						numberOfBlogs={3}
					/>
				</div>
			</div>

			{/* Categories */}
			<CategoryFilter categoryList={categoryList} onCategorySelect={(cat) => router.push(Routes.blogs(undefined, undefined, cat))} />

			{/* PrevNextPost */}
			<SectionHeadline
				title='Readers also read'
				subtitle=''
				className='mb-4 md:mb-11'
			/>

			<BlogList numberOfBlogs={3} blogList={blogList} />

			{/* Footer */}
			<Footer />
		</div >
	);
};

type BlogListPageProps = {
	headline: string;
	blog: Blog;
	blogList: Blog[];
	categoryList: ContentCategory[];
	courseList: Course[];
};

export const getStaticProps: GetStaticProps = async ({
	params,
	locale
}: Record<string, any>) => {
	const blogPageInfo = await BlogService.getBlogsStaticData(locale, '*');
	const blogList = await BlogService.getBlogs(locale, '*', { limit: 4, contentCategory: params?.contentCategory });
	const blog = await BlogService.getBlogBySlug(params.slug, locale);
	console.log('blog single', blog);
	const categoryList = await BlogService.getBlogCategories(locale);
	const courseList = await CourseService.getCourseList(locale, '*');

	return {
		props: {
			...blogPageInfo.data.attributes,
			blog: {
				...blog.data.attributes,
				contentCategory: blog.data.attributes.content_category.data.attributes,
				thumbnail: blog.data.attributes.thumbnail?.data.attributes,
			},
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
		},
		revalidate: 60
	};
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
	const blogList = await BlogService.getBlogs(locales[0], '*');
	console.log('blogList2, blog', blogList.data[0].attributes);
	const paths = blogList.data.map((blog) => ({
		params: { contentCategory: blog.attributes.content_category.data.attributes.slug, slug: blog.attributes.slug },
	}));
	console.log('pathsx', paths);

	return { paths, fallback: false };
};

export default BlogListPage;