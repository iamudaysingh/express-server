## __Client Server Architecture :__ ##
>* In simple words it consists of two things :
        > * servant, the one who provides certain services, this is the “server”
        > * consumer, who asks the servant to provide them certain services they are capable of, those are the “clients”.

## __Description :__ ##

>* As a rule the server should always be up, and always waits for someone to request a        service (kinda “I’m always ready to serve you” behaviour), this process of waiting is      called “listening”.The clients live as they like. They decide when to request a service    from a server. For this they should know the how to find the server (the server’s          “address”), while the server is not required to know the address of all the possible       clients (the people who go to the supermarket for shopping should know where the           supermarket is, but the supermarket does not, hopefully, keep the track on how to          locate each and every of their clients). They send the request to the server, the          server sends the response using the communication channel established by the client,       and then either one of them can decide to close that communication channel.
>* This is a very natural and easy-to-think-of model which we always encounter in our         everyday life.The client/server architecture is developed by decomposing the system        into the elements, some of which provide services, and the others consume those            services.

>* Simple process consists of 4 steps, they are:
   >* Obtaining the IP Address from domain name
   >* Browser requests the full URL
   >* Web server responds to request
   >* Browser displays the web page: The Browser finally gets the webpages and displays it,   or displays the error message.

