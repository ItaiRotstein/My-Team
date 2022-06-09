import oval from '../../assets/imgs/Oval.png'

export const SubjectPreview = ({ subject }) => {
    return (
        <article className="subject-preview">
            <img src={oval} alt="" />
            <img src={subject.img} alt="" />
            <h3>{subject.header}</h3>
            <p>{subject.content}</p>
        </article>
    )
}