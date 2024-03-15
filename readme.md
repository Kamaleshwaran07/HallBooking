# Hall Booking API

To work in the back-end we need express. I have installed and used it in index.js using the command.

```const app = express()```

I have used endpoint as `/hallbooking`.

## Routes

Routing has been generated for different endpoints for different requirements in *[hall.booking.js](./Routers/hall.booking.js)* 

###   1. **/createroom**
   - Method: POST
   - This endpoint is used to create room by the admin.
  
###  2. **/getroom**
   - Method: GET
   - This endpoint is used to get all the rooms available in the hotel.
###  3. **/bookroom**
   - Method: POST
   - This endpoint is book the room by customer passing the necessary details.
###  4. **/getbookedroom**
   - Method: GET
   - This endpoint is used to get the rooms that are booked by the customer in the hotel.
###  5. **/getcustomerdata**
   - Method: GET
   - This endpoint is used to get the details of the customer and the room that is used by the customer in the hotel.
  
### 6. **/getbookingcount/:customername**

Method: GET
   - This endpoint is used to get number of times the same customer has booked room in the hotel.


## Thank You!!!!!