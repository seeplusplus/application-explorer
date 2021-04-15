using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace applications_fn
{
    public static class ApplicationsFunction
    {
        [FunctionName("applications")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req,
            ILogger log)
        {
            var applications = new List<Application>() {
                new Application() {
                    Id = 0,
                    CandidateName = "Caleb Webber",
                    Availability = new Availability() {
                        Monday = true,
                        Tuesday = false,
                        Wednesday = false,
                        Thursday = true,
                        Friday = true,
                        Saturday = false,
                        Sunday = false
                    },
                    Questions = new List<Question>() {
                        new Question() {
                            Text = "Are you available to work in the US?",
                            Answer = "Yes"
                        }
                    }
                },
                new Application() {
                    Id = 0,
                    CandidateName = "John Doe",
                    Availability = new Availability() {
                        Monday = true,
                        Tuesday = true,
                        Wednesday = true,
                        Thursday = true,
                        Friday = true,
                        Saturday = true,
                        Sunday = true
                    },
                    Questions = new List<Question>() {
                        new Question() {
                            Text = "Are you available to work in the US?",
                            Answer = "Yes"
                        }
                    }
                },
                new Application() {
                    Id = 0,
                    CandidateName = "Alice",
                    Availability = new Availability() {
                        Monday = false,
                        Tuesday = false,
                        Wednesday = false,
                        Thursday = false,
                        Friday = false,
                        Saturday = false,
                        Sunday = false
                    },
                    Questions = new List<Question>() {
                        new Question() {
                            Text = "Are you available to work in the US?",
                            Answer = "Yes"
                        }
                    }
                },
            };
            

            return new OkObjectResult(applications);
        }
    }

}
