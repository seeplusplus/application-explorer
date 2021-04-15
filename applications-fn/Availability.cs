using Newtonsoft.Json;

namespace applications_fn
{
    public class Availability 
    {
        [JsonProperty(PropertyName = "M")]
        public int Monday { get; set; }

        [JsonProperty(PropertyName = "T")]
        public int Tuesday { get; set; }

        [JsonProperty(PropertyName = "W")]
        public int Wednesday { get; set; }
        
        [JsonProperty(PropertyName = "Th")]
        public int Thursday { get; set; }

        [JsonProperty(PropertyName = "F")]
        public int Friday { get; set; }

        [JsonProperty(PropertyName = "S")]
        public int Saturday { get; set; }

        [JsonProperty(PropertyName = "Su")]
        public int Sunday { get; set; }
    }
}