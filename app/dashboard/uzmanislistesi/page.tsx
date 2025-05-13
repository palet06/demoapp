import RadioCardsUzman from '@/app/components/radio-cards-uzman'
import { prisma } from '@/lib/prisma-singleton'
const page = async () => {
 const liste = await prisma.application.findMany({
  include:{
    applicant:true,
    employerInfo:true,
    histories:true,
    workflow:true
  },
  where:{
    status:"DEGERLENDIRME_ASAMASINDA"
  }
 })
  
  return (
    <>
    
    <RadioCardsUzman uzmanislistesi={liste}/>
    
    </>
  )
}

export default page