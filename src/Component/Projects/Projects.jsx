import Silder1 from "../Silder/Silder1";
import Silder2 from "../Silder/Silder2";
import Silder3 from "../Silder/slider3";


const Projects = () => {
    return (
        <div  id='projects' className="">    
            <h1 className="text-white text-center text-4xl m-6 font-bold">Projects</h1>
        <div className="flex gap-4 m-4 ">
        <div className="card w-96 bg-gradient-to-b from-[#AA076B] to-[#AA076B] via-[#61045F] text-white shadow-xl p-4">
        <figure> <Silder1></Silder1> </figure>
        <div className="card-body">
            <h2 className="card-title text-3xl">FitFormaFusion </h2>
            <h3>Fitness Tracker Website</h3>
            <p className="text-sm">It is a Fitness Tracker Application. User can see Dashboard as role after authentication.User can see classes and trainer detalis .User can see their activties and make their schdules.</p>
            <div className="card-actions justify-end gap-4">
            <a href="https://scintillating-sprite-a0bad8.netlify.app"><button className="btn btn-primary">Live side</button></a>
            <a href="https://github.com/seyam14/FitFormaFusion-ClientSide"><button className="btn btn-primary">Github repo</button></a>
            </div>
        </div>
        </div>
         <div className="card w-96 bg-gradient-to-b from-[#AA076B] to-[#AA076B] via-[#61045F] text-white shadow-xl p-4">
         <figure> <Silder2></Silder2> </figure>
         <div className="card-body">
            <h2 className="card-title text-3xl">UnityExchangeHub</h2>
            <h3>Online market place</h3>
            <p className="text-sm">It is a Online Marketing Application. User can see private route page after authentication.User can see all jobs.User can add jobs , maintain bids and own posted jobs .</p>
            <div className="card-actions justify-end gap-4">
            <a href="https://resplendent-cascaron-645470.netlify.app"><button className="btn btn-primary">Live side</button></a>
            <a href="https://github.com/seyam14/UnityExchangeHub-ClientSide"><button className="btn btn-primary">Github repo</button></a>
             </div>
         </div>
         </div>
         <div className="card w-96 bg-gradient-to-b from-[#AA076B] to-[#AA076B] via-[#61045F] text-white shadow-xl p-4">
         <figure> <Silder3></Silder3> </figure>
         <div className="card-body">
         <h2 className="card-title text-3xl">Brand-Shop</h2>
            <h3>Brand-Shop</h3>
            <p className="text-sm">It is a BrandShop website. User can see private page after authentication.User can see all Brands.User can add Products and maintain my cart page where products details store.</p>
            <div className="card-actions justify-end gap-4">
            <a href="https://brand-shop-clientside-frontend.web.app"><button className="btn btn-primary">Live side</button></a>
            <a href="https://github.com/seyam14/Brand-Shop-ClientSide"><button className="btn btn-primary">Github repo</button></a>
             </div>
         </div>
         </div>
      </div>   
    </div>   
    );
};

export default Projects;