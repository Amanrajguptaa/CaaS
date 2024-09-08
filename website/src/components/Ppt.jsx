import React from 'react'
import './Ppt.css'
function Ppt() {
  return (
    <div id='ppt' className=" relative ">
      <div className="text-black">
        <section className="mx-5 md:mx-10 h-auto bg-[#0038c7] relative  ">
          {/* Background Image */}
          <div className="relative overflow-hidden">
            <img
              className=""
              src="/gridd.png"
              alt=""
            />
          </div>

          <div className="absolute inset-0 top-20 flex flex-col ">
      <div class="main-container">

<div class="card-container-01">

    <div class=" card-even md:mr-[3px]">
    <img className="object-cover w-full h-full rounded-xl mr-10" src="/ppt1.jpg" alt="" />

    </div>

    <div class=" card-odd md:mr-[3px]">
    <img className="object-cover w-full h-full rounded-xl mr-10" src="/ppt2.jpg" alt="" />

    </div>

    <div class=" card-even md:mr-[3px]">
    <img className="object-cover w-full h-full rounded-xl mr-10" src="/ppt3.jpg" alt="" />

    </div>

    <div class=" card-odd md:mr-[3px]">
    <img className="object-cover w-full h-full rounded-xl mr-10" src="/ppt4.jpg" alt="" />

    </div>

</div>

<div class="card-container-01">

    <div class="card-even md:mr-[3px]">
      <img className="object-cover w-full h-full rounded-xl mr-10" src="/ppt5.jpg" alt="" />
    </div>

    <div class="card-odd md:mr-[3px]">
    <img className="object-cover w-full h-full rounded-xl mr-10" src="/ppt1.jpg" alt="" />

    </div>

    <div class="card-even md:mr-[3px]">
    <img className="object-cover w-full h-full rounded-xl mr-10" src="/ppt2.jpg" alt="" />

    </div>

    <div class="card-odd md:mr-[3px] hidden md:visible ">
    <img className="object-cover w-full h-full rounded-xl mr-10" src="/ppt3.jpg" alt="" />

    </div>

</div>
</div>

<div class="tag text-sm md:text-auto">
<div className='text-lg md:text-4xl mr-5 md:mr-32'>PPTs</div>
<div className='text-lg md:text-4xl mr-5 md:mr-32'>PPTs</div>
<div className='text-lg md:text-4xl mr-5 md:mr-32'>PPTs</div>
<div className='text-lg md:text-4xl mr-5 md:mr-32'>PPTs</div>
<div className='text-lg md:text-4xl mr-5 md:mr-32'>PPTs</div>


</div>


<div class="main-container">
<div class="card-container-02">

    <div class="card-odd md:mr-[3px]">
      <img className='object-cover w-full h-full rounded-xl md:mr-[3px]' src="/ppt6.jpg" alt="" />
    </div>

    <div class="card-even md:mr-[3px]">
    <img className='object-cover w-full h-full rounded-xl md:mr-[3px]' src="/ppt7.jpg" alt="" />

    </div>

    <div class="card-odd md:mr-[3px]">
    <img className='object-cover w-full h-full rounded-xl md:mr-[3px]' src="/ppt8.jpg" alt="" />

    </div>

    <div class="card-even md:mr-[3px]">
    <img className='object-cover w-full h-full rounded-xl md:mr-[3px]' src="/ppt9.jpg" alt="" />

    </div>

</div>

<div class="card-container-02">

    <div class="card-odd md:mr-[3px] ">
    <img className='object-cover w-full h-full rounded-xl md:mr-[3px]' src="/ppt6.jpg" alt="" />

    </div>

    <div class="card-even md:mr-[3px]">
    <img className='object-cover w-full h-full rounded-xl md:mr-[3px]' src="/ppt7.jpg" alt="" />

    </div>

    <div class="card-odd md:mr-[3px]">
    <img className='object-cover w-full h-full rounded-xl md:mr-[3px]' src="/ppt8.jpg" alt="" />

    </div>

    <div class="card-even md:mr-[3px]">
    <img className='object-cover w-full h-full rounded-xl md:mr-[3px]' src="/ppt9.jpg" alt="" />

    </div>

</div>
</div>
    </div>
    </section>
    </div>
    </div>
  )
}

export default Ppt
