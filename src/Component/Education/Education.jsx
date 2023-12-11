

const Education = () => {
    return (
        <div id="education">
         <h1 className="text-3xl text-white text-center font-semibold mb-4">Education </h1>
        <div className="bg-gradient-to-b from-[#AA076B] to-[#AA076B] via-[#61045F] min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-screen-lg mx-auto">
          <div className="bg-gradient-to-b from-[#AA076B] to-[#AA076B] via-[#61045F] text-white p-8 rounded shadow-md">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Shanto-Mariam University of Creative and Technology</h2>
              <p>Bachelor of Science in Computer Science</p>
              <p>4th Year (Running student)</p>
              <p>Average CGPA: 3.50</p>
            </div>
          </div>
    
          <div className="bg-gradient-to-b from-[#AA076B] to-[#AA076B] via-[#61045F] text-white p-8 rounded shadow-md mt-4 md:mt-0">
    
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Milestone College</h2>
              <p>Group: Science</p>
              <p>Passed Year: 2018</p>
              <p>GPA 4.00</p>
            </div>
          </div>
        </div>
      </div>
</div>   
    );
};

export default Education;