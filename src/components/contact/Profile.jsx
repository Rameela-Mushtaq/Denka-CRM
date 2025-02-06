import React from 'react'
import { TbPencil } from "react-icons/tb";
import profile2 from '../../assets/images/profile2.png'
import call from "../../assets/icons/call.png"
import gmail from "../../assets/icons/gmail.png"
import text from "../../assets/icons/text.png"

const Profile = () => {
  return (
    <div className='p-4 font-manrope'>
      <div className='border border-border rounded-lg'>
        <div className='flex flex-col gap-6'>
             {/* contact details */}
             <div className='py-3 px-5'>
              <div className='border border-border rounded-lg lg:px-10 px-4 md:py-8 py-4 flex flex-col md:gap-8 gap-4'>
                 <div className='flex justify-between gap-3 flex-wrap items-center'>
                  <div className='lg:text-2xl md:text-lg text-base font-bold'>Contact Details</div>
                  <button className='text-other border border-border rounded-lg md:p-3 p-2 md:text-base text-xs whitespace-nowrap flex items-center gap-3'>
                      <TbPencil />
                      Edit Profile
                    </button>
                 </div>

                 <div className='flex flex-wrap items-center gap-6'>
                  <img src={profile2} alt="user"  className='w-[30%] h-[30%] md:w-auto md:h-auto' />
                  <div className='flex flex-col gap-1.5'>
                      <div className='font-bold lg:text-2xl md:text-lg text-base'>James Williams</div>
                      <div className='font-medium md:text-base text-sm'>Co-Founder & Product Owner</div>
                      <div className='text-other md:text-sm text-xs'>Greater Los Angles Area</div>
                  </div>
                 </div>

                 <div className='border border-border rounded-lg flex flex-wrap gap-4 justify-between md:py-8 py-4 lg:px-12 md:px-8 px-4'>
                    <div className='flex flex-col gap-1'>
                      <div className='md:text-base text-sm'>(308) 555-0121</div>
                      <div className='text-other md:text-sm text-xs'>Home Phone</div>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <div className='md:text-base text-sm'>nevaeh.simmons@ee.com</div>
                      <div className='text-other md:text-sm text-xs'>Email Address</div>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <div className='md:text-base text-sm'>2464 Royal Ln. Mesa, New </div>
                      <div className='text-other md:text-sm text-xs'>Address</div>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <div className='md:text-base text-sm'>Gillette</div>
                      <div className='text-other md:text-sm text-xs'>Company</div>
                    </div>
                 </div>
              </div>
             </div>

             {/* more details */}
             <div className='px-5 flex flex-col gap-2'>
               <div className='lg:text-2xl md:text-lg text-base font-bold'>More Details</div>
               <div className='text-other lg:text-base md:text-sm text-xs'>John Doe, a representative from ABC Corp, can be reached via email at john.doe@abccorp.com or by phone at (555) 123-4567. Based in 123 Elm Street, Springfield, he is categorized as a B2B lead with a status of "Qualified." Recent interactions include a phone call on January 1, 2024, at 10:00 AM where project details were discussed, followed by an email on January 2, 2024, at 2:00 PM to send a follow-up, and a text message on January 3, 2024, at 9:00 AM to schedule a meeting. Notes from these interactions highlight the progressing discussions about potential collaboration opportunities. For further updates or changes, his profile details can be edited and new interactions can be logged as needed</div>
             </div>

             {/* timeline history panel */}
             <div className='px-5 pb-5 flex flex-col gap-4'>
             <div className='lg:text-2xl md:text-lg text-base font-bold'>Timeline History Panel</div>
             <div className='border border-border rounded-lg overflow-x-auto'>
             <table className=' w-full'>
                  <thead>
                    <tr className='text-other md:text-base text-sm font-medium border-b border-border'>
                      <td className='p-5 truncate'>Interaction Type</td>
                      <td className='p-5 truncate'>Date & Time</td>
                      <td className='p-5 truncate'>Summary</td>
                    </tr>
                  </thead>

                  <tbody className='md:text-base text-sm'>
                    <tr className='border-b border-border'>
                      <td className='p-5'><div className='flex  gap-3'>
                        <img src={call} alt="call" />
                        Call
                        </div></td>
                        <td className='p-5 truncate'>01/01/2024 10:00 AM</td>
                        <td className='p-5 truncate'>Discuss Project in Detail</td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='p-5 '><div className='flex  gap-3'>
                        <img src={gmail} alt="call" />
                        Email
                        </div></td>
                        <td className='p-5 truncate'>01/01/2024 10:00 AM</td>
                        <td className='p-5 truncate'>Discuss Project in Detail</td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='p-5'><div className='flex  gap-3'>
                        <img src={text} alt="call" />
                        Text
                        </div></td>
                        <td className='p-5 truncate'>01/01/2024 10:00 AM</td>
                        <td className='p-5 truncate'>Discuss Project in Detail</td>
                    </tr>
                  </tbody>
             </table>
             </div>
             </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
