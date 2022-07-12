using System;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
public class BuggyController:BaseApiController
{
    [HttpGet("not-found")]
    public ActionResult GetNotFound()
    {
        return NotFound();
    }

    [HttpGet("bad-request")]
    public ActionResult GetBadRequest()
    {
        return BadRequest(new ProblemDetails
        {  Title ="A bad request"   });
    }

    [HttpGet("unauthorised")]
    public ActionResult Unauthorised()
    {
        return Unauthorised();
    }

    [HttpGet("validation-error")]
    public ActionResult GetValidationError()
    {
        ModelState.AddModelError("Error1","This is first error");
        ModelState.AddModelError("Error2", "This is second error");
        return ValidationProblem();
    }

    [HttpGet("server-error")]
    public ActionResult GetServerError()
    {
        throw new Exception("This is a server error");
    }
}

}