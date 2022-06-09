import { Subjects } from '../cmp/subjects/subjects'
import { Header } from '../cmp/header'
import { Quotes } from '../cmp/quotes'

export const Home = () => {
    return (
        <section className="home">
            <Header/>
            <Subjects/>
            <Quotes />
        </section>
    )
}