import Link from 'next/link'
import SectionOneAtom from './Atoms/SectionOne';
import SectionTwoAtom from './Atoms/SectionTwo';
import SectionThreeAtom from './Atoms/SectionThree';
import SectionFourAtom from './Atoms/SectionFour';
import SectionFiveAtom from './Atoms/SectionFive';
import SectionSixAtom from './Atoms/SectionSix';
import SectionSevenAtom from './Atoms/SectionSeven';
import SectionEightAtom from './Atoms/SectionEight';
import SectionNineAtom from './Atoms/SectionNine';

export default function Home() {
  return (
    <main>
      <div className='flex gap-[350px] text-[25px] ml-[100px] fixed top-0 bg-white w-full'>
      <p className='text-[#FF8C01] text-[40px]'>FoodHouse</p>
      <div >
      <ul className='flex gap-[50px] mt-5'>
      <li className='mt-[-10px]'>
        <Link href="/">HOME</Link>
      </li>
      <li className='mt-[-10px]'>
        <Link href="/about">RESTURANT</Link>
      </li>
      <li className='mt-[-10px]'>
        <Link href="/blog">SERVICES</Link>
      </li>
      <li className='mt-[-10px]'>
        <Link href="/blog">CART</Link>
      </li>
      </ul>
      </div>
      <div className='mt-[10px] ml-[100px]'>
        <Link href="/">Sign In</Link>
      </div>
      </div>

<SectionOneAtom content_one={
        <div className='flex gap-[100px] mt-[250px]'>
          <div className='ml-[100px]'>
            <div className='w-[550px]'>
            <h2 className='text-[55px] font-semibold'>
            Enjoy Delicious Food in <span className='text-[#FFC625] '>Healthy Life</span>
            </h2>
            </div>
          <div className='w-[850px] mt-[50px]'>
            <p className='text-[30px] font-light text-black-500'>
              Tandori masala is an indian spice blend consisting of a
              variety of spices Tandoori masala is an indian spice blend
              consisting of a variety of spices.
            </p>
          </div>
          <button className='p-[20px] bg-[#FFC625] text-white text-[25px] rounded-xl w-[250px] mt-[150px]'>ORDER NOW</button>
          </div>
          <img src="/images/roastedchicken.png" alt="Chicken Image" className='blur-none w-[500px] mt-[40px]'/>
        </div>
      }
      />
      <SectionTwoAtom content_two={
        <div className='mt-[150px]'>
          <div className='ml-[42%]'>
          <p className='text-[30px] ml-20'>Online Store</p>
          <h1 className='text-[50px]'>Popular Foods</h1>
          </div>
          <div className='flex gap-[190px] p-[100px]'>
            <div className=''>
            <img src='images/fish.png' alt='fruit dish one pic'/>
            <p className='text-[30px] text-center'>Fruit dish</p>
            <p className='text-[20px] font-extralight text-center'>Dinko Food</p>
            <p className="ml-[85px]">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
            <button className='flex gap-[15px] bg-[#FFC625] text-white p-[25px]  rounded-[35px] ml-[50px] '><p>Add to Cart</p> <p>$696</p> </button>
            </div>
            <div className=''>
            <img src='images/fruitdish.png' alt='fruit dish two pic'/>
            <p className='text-[30px] text-center'>Fruit dish</p>
            <p className='text-[20px] font-extralight text-center'>Dinko Food</p>
            <p className="ml-[85px]">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
            <button className='flex gap-[15px] bg-[#FFC625] text-white p-[20px]  rounded-[35px] ml-[50px] '><p>Add to Cart</p> <p>$696</p> </button>
            </div>
            <div className=''>
            <img src='images/scallions.png' alt='fruit dish three pic'/>
            <p className='text-[30px] text-center'>Fruit dish</p>
            <p className='text-[20px] font-extralight text-center'>Dinko Food</p>
            <p className="ml-[85px]">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
            <button className='flex gap-[15px] bg-[#FFC625] text-white p-[20px]  rounded-[35px] ml-[50px]'><p>Add to Cart</p> <p>$696</p> </button>
            </div>
            <div className=''>
            <img src='images/pizza.png' alt='fruit dish four pic'/>
            <p className='text-[30px] text-center'>Fruit dish</p>
            <p className='text-[20px] font-extralight text-center'>Dinko Food</p>
            <p className="ml-[85px]">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
            <button className='flex gap-[15px] bg-[#FFC625] text-white p-[20px] rounded-[35px] ml-[50px]'><p>Add to Cart</p> <p>$696</p> </button>
            </div>
          </div>
        </div>
      }/>

<SectionThreeAtom content_three={
          <div className='flex justify-between p-[180px]'>
            <div>
            <button className='bg-[#F8C257] text-white p-[10px] rounded-[10px] w-[80px]'>-50%</button>
            <h1 className='text-[70px]'>Our Special Offer</h1>
            <div className='w-[470px]'>
              <p className='text-[20px]'>
                Best cooks and best delivery guys all
                at your service. Hot tasty food wiil reach
                you in 60 minutes.
              </p>
              <button className='bg-[#FFC625] text-white text-[20px] p-[18px] rounded-[10px] w-[180px] mt-[100px]'>See All Menu </button>
            </div>
            </div>
            <img src='images/maindish.jpg' className='w-[500px] mt-[6px] mr-8'/>
          </div>
      }/>
      <SectionFourAtom content_four={
        <div>
          <p className='text-[25px] ml-[42%]'>Quality Food</p>
          <h1 className='text-[50px] ml-[34%]'>Get The Best Offers</h1>
          <p className='text-[25px] ml-[25%] text-center w-[800px]'>The food at you doorstep. Why starve when you have us.
            Your hunger partner. Straight out of oven to you doorstep.
          </p>
          <div className='ml-[4%] flex gap-[70px] p-[200px]'>
            <div className='flex'>
              <div>
                <h1 className='text-[30px] w-[150px] font-medium'>Any day offers</h1>
                <p className='text-[20px] w-[250px]'>New phenomenon Burger taste</p>
                <p className='text-[20px] text-[#F8C257]'>$12.90</p>
                <button className='bg-[#F8C257] w-[35px] h-[10px] rounded-[10px] mt-[20px] '></button>
              </div>
              <img src='images/burger.jpeg' className='w-[200px] h-[200px]'/>
            </div>
            <div className='flex gap-[10px]'>
              <div>
                <h1 className='text-[30px] w-[150px] font-medium'>Other Flavors</h1>
                <p className='text-[20px] w-[250px]'>Save room. We made salads</p>
                <p className='text-[20px] text-[#F8C257]'>$12.90</p>
                <button className='mt-12 bg-[#F8C257] w-[35px] h-[10px] rounded-[10px] mt-[20px] '></button>
              </div>
              <img src='images/saladimage.jpeg' className='w-[200px] h-[200px]'/>
            </div>
            <div className='flex'>
              <div>
                <h1 className='text-[30px] w-[150px] font-medium'>Find a poco store near you</h1>
                <button className='mt-16 bg-[#F8C257] w-[35px] h-[10px] rounded-[10px] mt-[20px] '></button>
              </div>
              <img src='images/googlemaps.png' className='w-[200px] h-[200px]'/>
            </div>
          </div>
        </div>
      }/>

      <SectionFiveAtom content_five={
        <div className='ml-[5%]'>
          <h1 className='text-[35px] ml-[42%] font-medium'>Our Service</h1>
          <div className='items-centre flex gap-36 p-[100px]'>
            <div className='items-center'>
              <img src="images/kitchenicon.png" alt="restaurant image" className='w-32 ml-40' />
              <h3 className='text-[25px] ml-40'>55+ Restaurants</h3>
            </div>
            <div className='items-center'>
              <img src="images/percentage.jpeg" alt="restaurant image" className='w-32'/>
              <h3 className='text-[25px]'>Good Quality</h3>
            </div>
            <div className='items-center'>
              <img src="images/discount.png" alt="restaurant image" className='w-32'/>
              <h3 className='text-[25px]'>Discount System</h3>
            </div>
            <div className='items-center'>
              <img src="images/delivery.png" alt="restaurant image" className='w-32'/>
              <h3 className='text-[25px]'>Fast Delivery</h3>
            </div>
          </div>
        </div>
      }/>

<SectionSixAtom content_six={
        <div>
          <p className='text-[20px] font-bold text-center'>Testimonials</p>
          <p className='text-center text-[50px]'>What Our Clients Say</p>
          <img src='images/quotes.png' className='ml-[47%]'/>
          <p className='text-[20px] text-[grey] w-[830px] text-center ml-[28%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi aliquip ex ea commodo
          </p>
          <div className='flex gap-[2px] ml-[40%] p-[50px]'>
          <img src='images/financelady.jpeg' className='rounded-[24px] w-[50px] h-[50px]'/>
            <img src='images/dev.jpeg' className='rounded-[32px] w-[60px] h-[60px]'/>
            <img src='images/ceo.jpeg' className='rounded-[24px] w-[80px] h-[80px] mt-[-10px]'/>
            <img src='images/dev2.jpeg' className='rounded-[24px] w-[60px] h-[60px]'/>
            <img src='images/cto.jpeg' className='rounded-[24px] w-[50px] h-[50px]'/>
          </div>
          <h2 className='text-center font-bold text-[30px]'>Mitchell Marsh</h2>
          <p className='text-center text-[grey] text-[20px]'>CEO, Bexon Agency</p>
          <div className='flex ml-[46%] gap-[30px]'>
            <img src='images/backicon.png' className='mt-4 h-[50px] w-[50px]'/>
            <img src='images/forwardicon.png' className='mt-4 h-[50px] w-[50px]'/>
          </div>
        </div>
      }/>
      <SectionSevenAtom content_seven={
        <div className='flex gap-[100px] ml-[22%] p-[100px]'>
          <img src='images/apporder.png'/>
          <div className='p-[100px]'>
            <p className='text-[#FF8C01] text-[25px]'>Download Our App</p>
            <h2 className='w-[250px] font-bold text-[40px]'>It's all here. All in one app.</h2>
            <p className='w-[500px] text-[grey] text-[20px]'>
              Discover local, on-demand delivery or pickup from restaurants, nearby
              grocery and convinience stores, and more.
            </p>
            <div className='flex'>
              <img src='images/applestore.png'/>
              <img src='images/googleplaystore.png' className='ml-[-4%]'/>
            </div>
          </div>
        </div>
      }/>
      <SectionEightAtom content_eight={
        <div className='flex gap-[200px] p-[200px] ml-[10%]'>
          <div >
          <h1 className='w-[550px] font-bold text-[40px]'>Subscribe To Our Newsletter</h1>
          <p className='text-[20px] text-[grey]'>Subscribe on our newsletter to get our news</p>
          </div>
          <div className='relative'>
            <input type="text" placeholder='Your email address...' className='p-[20px] w-96'/>
            <button className='flex bg-[#FF8C01] text-[white] absolute top-[-1.5px] h-[64.5px] left-[300px] p-[20px] gap-[10px] rounded-[8px]'>Subscribe<span className='bg-[white] text-[#FF8C01] p-[5px] rounded-[3px] w-[30px]'>&#8594;</span></button>
          </div>
        </div>
      }/>
      <SectionNineAtom content_nine={
        <div>
          <div className='flex bg-[#180606] text-[white] p-[100px] gap-[480px]'>
          <div>
            <h1 className='text-[40px]'>FoodHouse <span className='text-[#FEC61C]'>.</span></h1>
            <p className='text-[20px] w-[400px]'>Best cooks and best delivery guys all
              at you service. Hot tasty food will reach you in 60 minutes
            </p><br/>
            <div className='flex gap-[10px]'>
              <img src="images/facebookicon.png" alt="facebook icon" className='w-[50px] h-[50px] rounded-[6px]'/>
              <img src="images/twittericon.png" alt="twitter icon" className='w-[50px] h-[50px] rounded-[6px]'/>
              <img src="images/linkedinicon.png" alt='linkedin icon' className='w-[50px] h-[50px] rounded-[6px]'/>
            </div>
          </div>
          <div className='flex gap-[180px]'>
          <div>
            <h1 className='text-[30px]'>Company</h1><br/>
            <p className='text-[20px]'>Career</p>
            <p className='text-[20px]'>About Us</p>
            <p className='text-[20px]'>Blog</p>
            <p className='text-[20px]'>Press Info</p>
            <p className='text-[20px]'>Features</p>
          </div>
          <div>
            <h1 className='text-[30px]'>Fudo</h1><br/>
            <p className='text-[20px]'>Why Fudo</p>
            <p className='text-[20px]'>How it Works</p>
            <p className='text-[20px]'>Why Choose Us</p>
            <p className='text-[20px]'>Client Stories</p>
            <p className='text-[20px]'>Gallery</p>
          </div>
          <div>
            <h1 className='text-[30px]'>Menu</h1><br/>
            <p className='text-[20px]'>Breakfast</p>
            <p className='text-[20px]'>Lunch</p>
            <p className='text-[20px]'>Dinner</p>
            <p className='text-[20px]'>Fast Foods</p>
            <p className='text-[20px]'>Drinks</p>
          </div>
          </div>
          </div>
          <div className='bg-[#F9C428] text-[white] flex gap-[200px] text-[20px] p-[20px]'>
            <p className='ml-[40%]'>Copyright 2021 Besnik All Rights Reserved</p>
            <div className='flex gap-[80px]'>
              <p>Terms</p>
              <p>Privacy</p>
              <p>Security</p>
            </div>
          </div>
        </div>
      }/>
    </main>
  );
}