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
        public static IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req,
            ExecutionContext context,
            ILogger log)
        {
            var path = System.IO.Path.Combine(context.FunctionAppDirectory, "data.json");
            var applications = JsonConvert.DeserializeObject<List<Application>>(System.IO.File.ReadAllText(path));
            

            return new OkObjectResult(applications);
        }
    }

}
