

const Education = () => {
    return (
        <div id="education">
         <h1 className="text-3xl text-white text-center font-semibold mb-4">Experience & Education </h1>
        <div className="bg-gradient-to-b from-[#AA076B] to-[#AA076B] via-[#61045F] min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-screen-lg mx-auto">
          <div className="bg-gradient-to-b from-[#AA076B] to-[#AA076B] via-[#61045F] text-white p-8 rounded shadow-md">
           <div>
           <div className="text-center font-bold">
            <h2 className="text-blue-200 text-2xl m-2">Experierence</h2>
          </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">DevMatrix</h2>
              <p>Internship</p>
              <p>Junior Front-end Web developer</p>
              <p>23 March 2024 -07 June 2024</p>
            </div>
            </div>
          </div>
    
          <div className="bg-gradient-to-b from-[#AA076B] to-[#AA076B] via-[#61045F] text-white p-8 rounded shadow-md mt-4 md:mt-0">
         <div >
          <div className="text-center font-bold">
            <h2 className="text-blue-200 text-2xl m-2">Education</h2>
          </div>
          <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Shanto-Mariam University of Creative and Technology</h2>
              <p>Bachelor of Science in Computer Science and Engineering(B.Sci)</p>
              <p>Graduated year: 2024</p>
              <p>CGPA: 3.73</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Milestone College</h2>
              <p>Higher Secondary Certificate(HSC)</p>
              <p>Group: Science</p>
              <p>Passed Year: 2018</p>
              <p>GPA 4.00</p>
            </div>
            </div>
          </div>
        </div>
      </div>
</div>   
    );
};

export default Education;