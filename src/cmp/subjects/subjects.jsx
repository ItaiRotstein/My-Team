import { SubjectsList } from "./subject-list"

export const Subjects = () => {
    return (
        <section className="subjects main-layout">
            <div className='subjects-container flex'>
                <h2>
                    Build & manage distributed teams like no one else.
                </h2>
                <SubjectsList/>
            </div>
        </section>
    )
}