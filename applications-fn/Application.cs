using System.Collections.Generic;

namespace applications_fn
{
    public class Application 
    {
        public int Id { get; set; }
        public string CandidateName { get; set; }
        public Availability Availability { get; set; }
        public List<Question> Questions { get; set; }
    }    
}
