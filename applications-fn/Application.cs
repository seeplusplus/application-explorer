using System;
using System.Collections.Generic;

namespace applications_fn
{
    public class Application 
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Position { get; set; }
        public DateTime Applied { get; set; }
        public int Experience { get; set; }
        public Availability Availability { get; set; }
        public List<Question> Questions { get; set; }
    }    
}
