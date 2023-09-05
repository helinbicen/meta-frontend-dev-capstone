import { testimonialsData } from "../utils/testamonialsData";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
    return (
      <div className="testimonial-background" id="testimonials">
        <div className="testimonials">
          <div className="testimonials-container">
            <h1 className="subtitle">Testimonials</h1>
          </div>
  
          <div className="testimonials-list">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard
              
                key={testimonial.id}
                author={testimonial.author}
                description={testimonial.description}
                image={testimonial.image}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonials;