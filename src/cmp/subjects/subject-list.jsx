import { SubjectPreview } from './subject-preview'

import img1 from '../../assets/imgs/1.png'
import img2 from '../../assets/imgs/2.png'
import img3 from '../../assets/imgs/3.png'

const subjects = [
    { img: img1, header: 'Experienced Individuals', content: 'Our network is made up of highly experienced professionals who are passionate about what they do.' },
    { img: img2, header: 'Easy to Implement', content: 'Our processes have been refined over years of implementation meaning our teams always deliver.' },
    { img: img3, header: 'Enhanced Productivity', content: 'Our customized platform with in-built analytics helps you manage your distributed teams.' }
]
export const SubjectsList = () => {
    return (
        <section className='subject-list'>
            {subjects.map((subject, idx) =>
                <SubjectPreview key={idx} subject={subject} />
            )}
        </section>
    )
}