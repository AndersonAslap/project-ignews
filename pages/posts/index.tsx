import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>12 de junho de 2022</time>
                        <strong>TypesCript and Javascript</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur cupiditate asperiores modi? Nulla quaerat alias dignissimos dolor! Totam earum incidunt numquam nesciunt. Vero, laboriosam magnam tenetur eaque iusto enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consequuntur tenetur consequatur atque a cum modi illo impedit alias vero nam molestias, labore similique pariatur quam cumque magni corporis repudiandae.</p>
                    </a>

                    <a href="#">
                        <time>12 de junho de 2022</time>
                        <strong>TypesCript and Javascript</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur cupiditate asperiores modi? Nulla quaerat alias dignissimos dolor! Totam earum incidunt numquam nesciunt. Vero, laboriosam magnam tenetur eaque iusto enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consequuntur tenetur consequatur atque a cum modi illo impedit alias vero nam molestias, labore similique pariatur quam cumque magni corporis repudiandae.</p>
                    </a>

                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'post')
    ], {
        fetch: ['post.title', 'post.content'],
        pageSize: 100,
    });

    console.log(JSON.stringify(response, null, 2))

    return {
        props: {

        }
    }
}
