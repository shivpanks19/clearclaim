import Head from 'next/head';
import Image from 'next/image';

import Text from '@/elements/Text';
import Button from '@/elements/Button';
import Navbar from '@/components/core/Navbar';
import { useTranslation } from 'next-i18next';

export default function Home() {
	const {t} = useTranslation();

	return (
		<div className='font-sans'>
			<Navbar />
			<div
				// className='h-45'
				style={{
					background:
						'url(/img/home/homeHeroBg.png) no-repeat center center fixed;',
					backgroundSize: 'cover',
					maxHeight:'100vh'
				}}
			>
				<div className='grid gap-2 md:w-76 mx-auto mb-32' style={{gridTemplateColumns:'1.25fr 1fr'}}>
					<div className='flex flex-col pt-20'>
						<h1 className='text-3xl md:text-hero font-semibold text-primary mb-5'>
							Gamify Learning,
							<br />
							Simplify Employment!
						</h1>
						<Text
							className='text-aphonic text-subhero mb-10'
							fontWeight='font-normal'
						>
							India’s first AR-based learning institue.
							<br />
							One-Stop Destination to skill - reskill yourself.
						</Text>
						<div className='flex mb-10'>
							<Button 
								buttonStyleClass='outlineButton'
								rounded='rounded-sm'
								className='px-5 py-3'
							>
								<Text
									variant='text-secondary'
									fontSize='text-lg'
									fontWeight='font-medium'
								>
									{t('Attend a FREE Workshop')}
								</Text>
							</Button>
							<Button 
								buttonStyleClass='textButton'
								rounded='rounded-sm'
								className='flex px-5 py-3 gap-3 place-items-center'
							>	
								<Image 
									src='/img/home/play.png'
									height={32}
									width={32}
									alt='play'
									className=''
								/>
								<Text
									variant='text-secondary'
									fontSize='text-lg'
									fontWeight='font-medium'
								>
									{t('Watch a demo video')}
								</Text>
							</Button>
						</div>
						<div className='flex place-items-center gap-3'>
							<Text
								className='text-primary'
								fontWeight='font-medium'
							>
								&gt; Next batch starts
							</Text>
							<Text
								className='text-tertiary'
								fontWeight='font-bold'
							>
								28th October 2022
							</Text>
						</div>
					</div>
					<div className='flex flex-col'>
						<div
							className='imgContainer'
							style={{ height: '30rem', width: '30rem', alignSelf:'flex-end' }}
						>
							<Image
								src='/img/home/hero.png'
								objectFit='cover'
								layout='fill'
								alt='Hero Image'
							/>
						</div>
						<div className='trust flex flex-col place-items-center -mt-10 pt-7 z-10 bg-light'>
							<div className='flex gap-2' style={{alignItems:'flex-end'}}>
								<Text
									className ='text-primary text-subhero'
								>
									Trusted by 
								</Text>
								<Text
									className ='text-tertiary text-2xl'
									fontWeight='font-bold'
								>
									10,000+ 
								</Text>
								<Text
									className ='text-primary text-subhero'
								>
									students
								</Text>
							</div>
							<Text className='text-primary'>all over India</Text>
						</div>
					</div>
				</div>
				{/* Stats */}
				<div className='w-76 shadow rounded h-20 mx-auto -mt-20 bg-white'>
					asdads Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt pariatur officia voluptas, quas inventore ducimus itaque eveniet officiis et, explicabo maxime eum tempore. Eum voluptate obcaecati eligendi laborum omnis! Deserunt inventore commodi sint porro fugit natus repellat. Consequatur, aperiam delectus culpa itaque dolor quas, temporibus ab dignissimos obcaecati iste ullam, quibusdam quos molestiae est? Veniam velit corporis alias vel. Aliquam, cupiditate accusantium dolore consequatur nesciunt quam delectus optio ex cumque aspernatur fugiat deleniti eius esse nam iusto adipisci distinctio odio perspiciatis soluta animi voluptas! Debitis dicta beatae facilis fugiat sint qui architecto autem fugit incidunt. Unde nostrum adipisci qui veniam quo consequatur natus eaque minima sit. Fuga perferendis nihil quia necessitatibus, magni illo quod fugit labore error libero est laboriosam quis non voluptas? Ea, mollitia. Delectus exercitationem fugiat harum, commodi blanditiis obcaecati illum quibusdam consectetur quasi doloribus ex, similique accusantium pariatur magni. Beatae hic, aperiam cumque quas harum fugiat, vitae praesentium ut cum reiciendis repudiandae optio, earum corporis recusandae ipsa unde. Fugit sunt soluta debitis voluptate iste, provident incidunt necessitatibus, distinctio beatae nisi, ullam ex? Nisi doloremque incidunt est explicabo voluptatibus esse consequuntur alias quas, modi recusandae repellat ducimus consectetur nostrum praesentium aut magnam consequatur velit expedita? Dicta eius ex voluptatem tempore similique porro molestias magnam, doloribus repudiandae, accusamus a error quo facilis culpa expedita modi nihil nesciunt quam quae provident explicabo amet ut temporibus magni! Totam amet maxime architecto dolores a omnis laboriosam quia explicabo quidem tenetur vel accusamus voluptatibus natus unde molestiae cumque sed culpa, eum ullam, perferendis dignissimos exercitationem nemo. Suscipit perspiciatis minima repudiandae fugiat exercitationem voluptatibus consectetur ullam labore cum atque neque nemo, consequuntur rem, deserunt incidunt veritatis ex aperiam harum in? Fugiat explicabo atque quam maxime rerum nisi aliquam, tempora commodi enim, quos maiores asperiores blanditiis quis itaque aperiam mollitia excepturi cum eius rem quia nobis. Nemo tenetur veritatis nihil dolores. Velit rem laborum eaque accusantium, cumque doloremque quos eligendi, magnam ullam qui libero unde ducimus optio eum natus dolorum temporibus esse incidunt perspiciatis aliquam modi nihil fuga sint numquam. Expedita veritatis quam, architecto voluptas consequuntur sint omnis, repellendus obcaecati illum, possimus pariatur iure. Repellendus in quis, aliquam expedita nisi qui culpa consectetur accusamus voluptate quod assumenda suscipit pariatur enim earum animi porro at aut nam natus tempora veniam? Nobis quae, iure architecto veritatis, labore doloribus similique fuga ad maxime asperiores voluptas! Vel sed cupiditate nam consequatur assumenda fugiat corporis numquam quae nihil. Consectetur aliquam dolores rem distinctio veniam. Aperiam delectus error aut deserunt ipsam, eveniet harum in quos autem eos aliquam eaque, officiis itaque dolores pariatur. Commodi laudantium nisi, a ipsa, reprehenderit mollitia, similique rerum officiis quisquam aliquam fuga voluptatibus error? Dignissimos reiciendis voluptatibus nisi totam, incidunt consequuntur voluptas qui veniam porro sequi consectetur repudiandae enim ab laboriosam repellendus deserunt omnis soluta, sit facilis est aperiam iusto exercitationem. Commodi illo molestias placeat vel fugit reiciendis corrupti dicta impedit ex, maxime sapiente iure ipsam alias a totam repellendus aspernatur? Iste est voluptatibus temporibus voluptatem, itaque harum facilis error, quaerat quis consequuntur ad earum atque saepe totam blanditiis repudiandae ipsum velit. Earum reiciendis repellat illo sunt in, ut, sit provident non omnis quaerat impedit a nulla, quo sint culpa fuga sequi facilis dolore pariatur excepturi explicabo voluptatum? Illum non quaerat, deleniti unde fugiat porro modi, minus quasi repellendus architecto neque odio! Vero natus molestias quas dolore repellat. Ipsa laudantium excepturi non amet eveniet. Impedit numquam, dolor nostrum, quo sed et error fugit labore tempore, ullam quos at aliquam. Id aspernatur rerum harum quam velit et, possimus eius quo recusandae a iure atque porro tempore? Cumque, consectetur. Aperiam dicta aspernatur, alias magnam similique eius iste blanditiis adipisci aut corporis, dolorum doloremque! Necessitatibus, sequi velit distinctio quibusdam vel neque delectus mollitia ducimus consectetur dicta veritatis quo facilis laboriosam tenetur molestiae quidem omnis? Fugit est sit voluptatum aperiam repudiandae laboriosam libero quidem ab, quaerat iusto natus? Mollitia et fuga voluptatibus doloremque, corporis reiciendis harum ea repudiandae illo cumque inventore porro quisquam nam maxime libero itaque consequuntur accusantium maiores iusto, ratione iure aut magni dolores. Esse eligendi molestiae reprehenderit? Debitis natus maiores cupiditate eaque iure officia voluptates, alias, magnam quod vel omnis nostrum neque magni, illum excepturi recusandae non cum provident! Illo minima vel ea quaerat eum dolore, amet nisi. Eos similique quos consequuntur, quisquam, alias iste deserunt corrupti quia sunt nesciunt expedita, voluptatibus quaerat ipsam ullam error? Tempora, vel? Fuga odio sequi error veritatis adipisci vitae modi. Accusantium porro autem omnis sunt facere? Quisquam excepturi, soluta placeat consequuntur fugiat est qui praesentium, minima eveniet, reprehenderit commodi vel ipsam rerum culpa mollitia id sint in. Distinctio a esse earum culpa eligendi quis itaque ipsum nam adipisci ipsa, expedita sed minima doloribus, id repellendus ipsam. Alias ad rem quasi ipsam eveniet obcaecati! Vitae, ad! Quis illum vitae asperiores exercitationem fuga provident eligendi explicabo nemo iste iure, ratione perspiciatis dolor maiores voluptates consequatur ducimus cupiditate veritatis beatae itaque accusantium in blanditiis, ipsum voluptatum. A deleniti eaque dolorem reiciendis non saepe ipsa sed modi, quidem, voluptas ut molestias accusantium porro quos temporibus aperiam dolores animi error? Veritatis omnis deleniti at nisi. Reprehenderit quam officiis perspiciatis, dignissimos sint tempore est quasi impedit inventore dolorum quae ipsam maiores incidunt magnam nobis fuga quod assumenda qui hic nemo, voluptatem eaque. Consequatur libero dolores, eius culpa sint quaerat provident magnam doloribus earum eum! Dolorem consequuntur quibusdam quam explicabo? Soluta id sequi aliquam perferendis quam asperiores rem, ipsam, nam quis dolore sint ut explicabo ipsa vitae pariatur rerum aliquid ad. Inventore repudiandae eveniet, hic incidunt odit non ducimus eum adipisci, quasi aperiam dolorem asperiores! Expedita minima exercitationem perferendis earum, dolor voluptatibus libero similique esse aperiam obcaecati iure repellendus voluptatum asperiores excepturi beatae. Dolore esse iusto voluptate fugit nisi sed, sunt doloribus minus labore tenetur nobis reprehenderit debitis hic distinctio possimus omnis animi nam dolores. Iusto nostrum consequatur blanditiis maiores in beatae optio aut, libero placeat molestiae dicta, voluptatum quasi ab ex quisquam numquam voluptatem culpa corrupti? Ab laudantium tempore fuga facilis dolor pariatur assumenda commodi beatae reiciendis, quidem neque! Odit eos cupiditate, laborum ad ea cum? Ex, distinctio.
				</div>
			</div>
		</div>
	);
}
