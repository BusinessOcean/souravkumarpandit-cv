import React from 'react'
import Banner from './Banner'
import SkillsGrid from './SkillsGrid'
import WorkTestimony from './WorkTestimony'
import Education from './Education'
import WorkHistory from './WorkHistory'
import PorfolioGallary from './PorfolioGallary'
import Blogs from './Blogs'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'
import CompanyTestimony from '@/components/CompanyTestimony'

export default function MainContent() {
    return (
        <div className='flex flex-col w-full gap-16 mx-8 grow '>
            <Banner />
            <SkillsGrid></SkillsGrid>
            <WorkTestimony></WorkTestimony>
            <Education></Education>

            <WorkHistory></WorkHistory>
            <PorfolioGallary></PorfolioGallary>
            <Blogs></Blogs>
            <div className='flex flex-row justify-center gap-8'>
                <ContactForm></ContactForm>
                <ContactInfo></ContactInfo>
            </div>
            <CompanyTestimony></CompanyTestimony>
            <Footer></Footer>


        </div>
    )
}
