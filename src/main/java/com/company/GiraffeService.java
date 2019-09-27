package com.company;

import com.fasterxml.jackson.databind.util.JSONPObject;


import javax.print.attribute.standard.Media;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Produces(MediaType.APPLICATION_JSON)
@Path("giraffes")

public class GiraffeService {
    //List<String> giraffes = Arrays.asList("Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer","Melman","Elmer");

    static ArrayList<String> giraffes = new ArrayList<>();
    static{
        giraffes.add("Melman");
        giraffes.add("Elmer");
        giraffes.add("Melman");
        giraffes.add("Elmer");
        giraffes.add("Melman");
        giraffes.add("Elmer");
        giraffes.add("Melman");
        giraffes.add("Elmer");
        giraffes.add("Elmer");
        giraffes.add("Melman");
        giraffes.add("Elmer");
        giraffes.add("Melman");
        giraffes.add("Elmer");
        giraffes.add("Melman");
        giraffes.add("Elmer");
        giraffes.add("Melman");
        giraffes.add("Kim");
    }
    @GET
    public List<String> getGiraffes(){
        return giraffes;
    }

    @POST
    public Response storeGiraffes(String msg){
        String result = msg;
        giraffes.add(result);
        return Response.status(200).build();
    }
}
