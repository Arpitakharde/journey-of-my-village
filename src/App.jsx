import "./App.css";

export function App(props) {
  const { img, img1, img2, img3, img4, img5, img6 ,img7} = props;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to My Village</h1>
      <p className="mb-4">
        My city is known for its beautiful parks, vibrant culture, and rich history. 
        From the stunning skyline to the friendly neighborhoods, there's something for everyone.
      </p>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15040.391106565934!2d74.53564085!3d19.53741535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcf39816b4a45f%3A0xe47492435013b541!2sKolhar%20Budruk%2C%20Maharashtra%20413710!5e0!3m2!1sen!2sin!4v1737874246259!5m2!1sen!2sin" 
        width="100%" 
        height="450" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade" 
        title="Map of Kolhar Budruk, Maharashtra"
        className="mb-4"
      ></iframe>

      <div className="space-y-8 bg-sky-50 mt-10">
        {/* Hospital Section */}
        <div className="flex items-center">
          <div className="w-1/2">
            <img src={img} alt="Hospital" className="w-full h-screen" />
          </div>

          <div className="w-1/2 pr-4">
            <h3 className="text-xl font-semibold ml-10">Hospital</h3>
            <p className="ml-10">
              My city boasts a state-of-the-art hospital equipped with the latest technology and a dedicated team of healthcare professionals.
            </p>
          </div>
          
        </div>

        
        <div className="flex items-center bg-sky-50 mt-10">
          <div className="w-1/2 pr-4">
            <h3 className="text-xl font-semibold">Bhagavati Mata Temple</h3>
            <p>
              The Bhagavati Mata Temple is a beautiful spiritual site that attracts visitors from all over. Its serene atmosphere and stunning architecture make it a must-visit.
            </p>
          </div>
          <div className="w-1/2 flex space-x-2">
            <img src={img1} alt="Bhagavati Mata Temple" className="w-1/2 h-auto" />
            <img src={img2} alt="Bhagavati Mata Temple" className="w-1/2 h-auto" />
          </div>
        </div>

        {/* Schools Section */}
        <div className="flex items-center bg-sky-50 mt-10">
        <div className="w-1/2 flex space-x-2">
            <img src={img3} alt="School" className="w-1/3 h-auto" />
            <img src={img4} alt="School" className="w-1/3 h-auto" />
            <img src={img5} alt="School" className="w-1/3 h-auto" />
        </div>

          <div className="w-1/2 pr-4">
            <h3 className="text-xl font-semibold ml-10">Schools in my city</h3>
            <p className="ml-10">
              My city is home to several reputable schools that provide quality education and a nurturing environment for students.
            </p>
          </div>
          
        </div>

        {/* Shopping Malls Section */}
        <div className="flex items-center bg-sky-50 mt-10">
          <div className="w-1/2 pr-4">
            <h3 className="text-xl font-semibold"> Sweets and Cloth Shops</h3>
            <p>
              From local markets to modern shopping malls, my city offers a variety of shopping options for all your needs.
            </p>
          </div>
          <div className="w-1/2 flex space-x-2">
            <img src={img6} alt="sweet-shop" className="w-1/2 h-auto" />
            <img src={img7} alt="cloth-shop" className="w-1/2 h-auto" />
          </div>
        </div>
        </div>
      </div>
    );
  }

  export default App;