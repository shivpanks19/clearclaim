import React from "react";
import Container from '@/components/layout/Container';
import SectionHeadline from "@/components/common/SectionHeadline";
import CurriculumNav from "@/components/courses/CourseCurriculum/CurriculumNav";

const CourseCurriculumSection: React.FC<CourseCurriculumSectionProps> = ({ curriculumList }) => {
	return (
		<Container className='hidden xl:block'>
			{curriculumList?.length > 0 && (
				<>
					<a id='course-curriculum' />
					<SectionHeadline
						title='Course Curriculum'
						subtitle='Dowload the course curriculum'
						className='mb-8'
					/>
					<CurriculumNav curriculumList={curriculumList} />
				</>
			)}
		</Container>
	)
};

type CourseCurriculumSectionProps = {
	curriculumList: ({
		title: string;
		text1: string;
		text2: string;
	})[];
};

export default CourseCurriculumSection;