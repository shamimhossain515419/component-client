import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Container from '../../../Components/Container/Container';
import { GrView } from "react-icons/gr";
import { IoMdCode } from "react-icons/io";
import { RiCopyrightLine } from "react-icons/ri";
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { a11yDark, } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CopyToClipboard from 'react-copy-to-clipboard';

const navigation = [
     { name: 'Product', href: '#' },
     { name: 'Features', href: '#' },
     { name: 'Marketplace', href: '#' },
     { name: 'Company', href: '#' },
]

const Home = () => {
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
     const [active, setActive] = useState(1);
     const [activeCode, setActiveCode] = useState('HTML');
     const [Copied, setCopied] = useState(false);
     const [componentsData, setComponentsData] = useState([])

     useEffect(() => {
          async function GetData() {
               const res = await fetch('http://localhost:5000/component');
               const data = await res.json();
               setComponentsData(data)
          }
          GetData();
     })
     const codeHTML = componentsData[0]?.HTML;
     const codeReact = componentsData[0]?.React;
     const codeVue = componentsData[0]?.Vue;

     function setTimeOut() {
          setCopied(false)
     }
     setTimeout(setTimeOut, 6000)
     return (
          <div>
               <Container>
                    <div className=' my-2 w-full'>
                         <div className=' my-20'>
                              <h1 className='text-3xl md:text-4xl  text-[#4c46f5] font-bold text-center'> Start Tailwind Components</h1>
                         </div>
                    </div>


                    {/* filter section  */}
                    <div className='my-4'>
                         <div className='  flex justify-between gap-2 items-center  '>
                              <div className=' flex justify-start  gap-2 overflow-hidden'>
                                   <h3 className=' text-base  md:text-lg   font-medium'> Simple centered</h3>
                                   <p className='  font-base bg-[#F1F5F9] px-2 py-[2px] rounded-[4px]'>Requires JS</p>
                              </div>
                              <div></div>
                              <div className=' flex justify-start gap-2 xl:gap-4'>
                                   <div className=' flex  justify-start  items-center z-50 bg-[#F1F5F9]   p-[2px] rounded-[7px]'>

                                        <div onClick={() => setActive(1)} className={`  ${active == 1 ? "  bg-[#FFF]   " : " bg-[#F1F5F9]"}   cursor-pointer   rounded-[7px]      px-2 py-[4px] flex  items-center  gap-2`}>
                                             <GrView className={` ${active == 1 ? " text-[#4BBCEF] " : ""} `} size={18} />
                                             <p className=' hidden md:block font-medium'> Preview</p>
                                        </div>
                                        <div onClick={() => setActive(2)} className={`  ${active == 2 ? "  bg-[#FFF]   " : " bg-[#F1F5F9]"}   cursor-pointer  rounded-[7px]      px-2 py-[4px] flex  items-center  gap-2`}>
                                             <IoMdCode className={` ${active == 2 ? " text-[#4BBCEF] " : ""}  `} size={18} />
                                             <p className=' hidden md:block  font-medium'>Code</p>
                                        </div>
                                   </div>

                                   <div className='  hidden  sm:block  my-2  w-[1px] bg-[#2f2e2eb9]'></div>
                                   <div className='hidden relative  sm:block'>
                                        <div className='  flex items-center gap-4 '>


                                             <div>
                                                  <select onChange={(e) => setActiveCode(e.target.value)} className='   cursor-pointer z-50 focus:outline-[#4BBCEF] px-[15px] py-[5px] rounded-lg  ' name="" id="">
                                                       <option className=' cursor-pointer' value="HTML">HTML</option>
                                                       <option className=' cursor-pointer' value="React">React</option>
                                                       <option className=' cursor-pointer' value="Vue">Vue</option>
                                                  </select>
                                             </div>
                                             <div className=' text-[#0f172ad3]  hover:opacity-100  opacity-70 cursor-pointer'>
                                                  <CopyToClipboard text={activeCode === "React" ? codeReact : activeCode === "Vue" ? codeVue : codeHTML} onCopy={() => setCopied(true)}>
                                                       <RiCopyrightLine size={22} />
                                                  </CopyToClipboard>
                                                  {
                                                       Copied ? <div className=' bg-black px-4  py-1 rounded-lg text-white absolute -top-10 '>
                                                            copied
                                                       </div> : null
                                                  }

                                             </div>

                                        </div>
                                   </div>



                              </div>


                         </div>
                    </div>

                    <div>
                         {/* Component view */}

                         {
                              active == 1 ?
                                   <div className="bg-white relative border   overflow-hidden">
                                        <header className="absolute inset-x-0 top-0 z-50">
                                             <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                                                  <div className="flex lg:flex-1">
                                                       <a href="#" className="-m-1.5 p-1.5">
                                                            <span className="sr-only">Your Company</span>
                                                            <img
                                                                 className="h-8 w-auto"
                                                                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                                                 alt=""
                                                            />
                                                       </a>
                                                  </div>
                                                  <div className="flex lg:hidden">
                                                       <button
                                                            type="button"
                                                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                                            onClick={() => setMobileMenuOpen(true)}
                                                       >
                                                            <span className="sr-only">Open main menu</span>
                                                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                                       </button>
                                                  </div>
                                                  <div className="hidden lg:flex lg:gap-x-12">
                                                       {navigation.map((item) => (
                                                            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                                                                 {item.name}
                                                            </a>
                                                       ))}
                                                  </div>
                                                  <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                                                       <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                                            Log in <span aria-hidden="true">&rarr;</span>
                                                       </a>
                                                  </div>
                                             </nav>
                                             <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                                                  <div className="fixed inset-0 z-50" />
                                                  <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                                                       <div className="flex items-center justify-between">
                                                            <a href="#" className="-m-1.5 p-1.5">
                                                                 <span className="sr-only">Your Company</span>
                                                                 <img
                                                                      className="h-8 w-auto"
                                                                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                                                      alt=""
                                                                 />
                                                            </a>
                                                            <button
                                                                 type="button"
                                                                 className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                                                 onClick={() => setMobileMenuOpen(false)}
                                                            >
                                                                 <span className="sr-only">Close menu</span>
                                                                 <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                            </button>
                                                       </div>
                                                       <div className="mt-6 flow-root">
                                                            <div className="-my-6 divide-y divide-gray-500/10">
                                                                 <div className="space-y-2 py-6">
                                                                      {navigation.map((item) => (
                                                                           <a
                                                                                key={item.name}
                                                                                href={item.href}
                                                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                                           >
                                                                                {item.name}
                                                                           </a>
                                                                      ))}
                                                                 </div>
                                                                 <div className="py-6">
                                                                      <a
                                                                           href="#"
                                                                           className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                                      >
                                                                           Log in
                                                                      </a>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </Dialog.Panel>
                                             </Dialog>
                                        </header>
                                        <div className="relative isolate px-6 pt-14 lg:px-8">
                                             <div
                                                  className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                                                  aria-hidden="true"
                                             >
                                                  <div
                                                       className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                                                       style={{
                                                            clipPath:
                                                                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                                       }}
                                                  />
                                             </div>
                                             <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                                                  <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                                                       <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                                            Announcing our next round of funding.{' '}
                                                            <a href="#" className="font-semibold text-indigo-600">
                                                                 <span className="absolute inset-0" aria-hidden="true" />
                                                                 Read more <span aria-hidden="true">&rarr;</span>
                                                            </a>
                                                       </div>
                                                  </div>
                                                  <div className="text-center">
                                                       <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                                            Data to enrich your online business
                                                       </h1>
                                                       <p className="mt-6 text-lg leading-8 text-gray-600">
                                                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                                                            fugiat veniam occaecat fugiat aliqua.
                                                       </p>
                                                       <div className="mt-10 flex items-center justify-center gap-x-6">
                                                            <a
                                                                 href="#"
                                                                 className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                            >
                                                                 Get started
                                                            </a>
                                                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                                                 Learn more <span aria-hidden="true">→</span>
                                                            </a>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div
                                                  className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                                                  aria-hidden="true"
                                             >
                                                  <div
                                                       className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                                                       style={{
                                                            clipPath:
                                                                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                                       }}
                                                  />
                                             </div>
                                        </div>
                                   </div>
                                   :

                                   //    component view 
                                   <div className='relative p-3  bg-[#1E293B]'>
                                        <div className=' py-2'>
                                             <div className=' text-white text-base   font-semibold  flex justify-start gap-5 items-center  '>
                                                  <button onClick={() => setActiveCode("HTML")} className={`mt-4 px-2 relative ${activeCode == "HTML" ? "border-b-2 border-[#38BDF8]  text-[#38BDF8]" : ""}   `}>HTML</button>
                                                  <button onClick={() => setActiveCode("React")} className={`mt-4 px-2 relative  ${activeCode == "React" ? "border-b-2 border-[#38BDF8]  text-[#38BDF8]" : ""}   `}>React</button>
                                                  <button onClick={() => setActiveCode("Vue")} className={`mt-4 px-2  relative ${activeCode == "Vue" ? "border-b-2 border-[#38BDF8]  text-[#38BDF8]" : ""}   `}>Vue</button>
                                             </div>
                                             <div className=' w-full  relative    h-[1px] bg-[#434242]' />
                                        </div>
                                        {activeCode === "Vue" ? <SyntaxHighlighter
                                             language="javascript"
                                             customStyle={{
                                                  background: '#1E293B ',
                                                  color: '#fff',
                                                  margin: '0',
                                                  borderRadius: "10px"
                                             }}
                                             style={a11yDark}>
                                             {codeVue}
                                        </SyntaxHighlighter>
                                             : activeCode === "React" ? <SyntaxHighlighter
                                                  language="Javascript"
                                                  customStyle={{
                                                       background: '#1E293B ',
                                                       color: '#fff',
                                                       margin: '0',
                                                       borderRadius: "10px"
                                                  }}
                                                  style={a11yDark}>
                                                  {codeReact}
                                             </SyntaxHighlighter> : <SyntaxHighlighter
                                                  language="HTML"
                                                  customStyle={{
                                                       background: '#1E293B ',
                                                       color: '#fff',
                                                       margin: '0',
                                                       borderRadius: "10px"
                                                  }}
                                                  style={a11yDark}>
                                                  {codeHTML}
                                             </SyntaxHighlighter>
                                        }

                                   </div>
                         }

                    </div>

               </Container >

          </div >
     );
};

export default Home;