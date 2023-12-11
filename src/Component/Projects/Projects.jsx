import Silder1 from "../Silder/Silder1";
import Silder2 from "../Silder/Silder2";
import Silder3 from "../Silder/slider3";

const Projects = () => {
    return (
        <div id='projects' className="p-4 sm:p-6 md:p-8 lg:p-10 ">
            <h1 className="text-white text-center text-4xl m-6 font-bold">Projects</h1>
            <div className="grid  gap-6 md:grid-cols-2 lg:grid-cols-3 ">
                <div className="card w-96 bg-gradient-to-b from-[#AA076B] to-[#AA076B] via-[#61045F] text-white shadow-xl p-4">
                    <figure><Silder1></Silder1></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">FitFormaFusion</h2>
                        <h3>Fitness Tracker Website</h3>
                        <p className="text-sm">It is a Fitness Tracker Application. Users can see the Dashboard as a role after authentication. Users can see classes and trainer details. Users can see their activities and make their schedules.</p>
                        <div className="card-actions flex grid-col md:grid-row md:justify-end gap-4">
                            <a href="https://scintillating-sprite-a0bad8.netlify.app"><button className="btn btn-primary">Live site</button></a>
                            <a href="https://github.com/seyam14/FitFormaFusion-ClientSide"><button className="btn btn-primary">Github repo</button></a>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-gradient-to-b from-[#AA076B] to-[#AA076B] via-[#61045F] text-white shadow-xl p-4">
                    <figure><Silder2></Silder2></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">UnityExchangeHub</h2>
                        <h3>Online marketplace</h3>
                        <p className="text-sm">It is an Online Marketing Application. Users can see a private route page after authentication. Users can see all jobs. Users can add jobs, maintain bids, and own posted jobs.</p>
                        <div className="card-actions flex grid-col md:grid-row md:justify-end gap-4">
                            <a href="https://resplendent-cascaron-645470.netlify.app"><button className="btn btn-primary">Live site</button></a>
                            <a href="https://github.com/seyam14/UnityExchangeHub-ClientSide"><button className="btn btn-primary">Github repo</button></a>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-gradient-to-b from-[#AA076B] to-[#AA076B] via-[#61045F] text-white shadow-xl p-4">
                    <figure><Silder3></Silder3></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Brand-Shop</h2>
                        <h3>Brand-Shop</h3>
                        <p className="text-sm">It is a BrandShop website. Users can see a private page after authentication. Users can see all Brands. Users can add Products and maintain the cart page where product details are stored.</p>
                        <div className="card-actions flex grid-col grid-col md:flex-row md:justify-end gap-4">
                            <a href="https://brand-shop-clientside-frontend.web.app"><button className="btn btn-primary">Live site</button></a>
                            <a href="https://github.com/seyam14/Brand-Shop-ClientSide"><button className="btn btn-primary">Github repo</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
