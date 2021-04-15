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
            var applications = JsonConvert.DeserializeObject<List<Application>>(System.IO.File.ReadAllText("./data.json"));
            

            return new OkObjectResult(applications);
        }
    }

}
