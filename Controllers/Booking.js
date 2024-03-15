import { format } from 'date-fns';


let rooms = [
  {
    room_id: 1,
    room_name: "Single Room",
    room_status: "available",
    amenities: "TV, Wi-Fi",
    no_of_person: 1,
    price_per_hour: "$50"
  },
  {
    room_id: 2,
    room_name: "Double Room",
    room_status: "available",
    amenities: "TV, Wi-Fi",
    no_of_person: 2,
    price_per_hour: "$80"
  },
  {
    room_id: 3,
    room_name: "Twin Room",
    room_status: "available",
    amenities: "TV, Wi-Fi",
    no_of_person: 2,
    price_per_hour: "$80"
  },
  {
    room_id: 4,
    room_name: "Deluxe Room",
    room_status: "available",
    amenities: "TV, Wi-Fi, Mini Bar",
    no_of_person: 2,
    price_per_hour: "$100"
  },
  {
    room_id: 5,
    room_name: "Suite",
    room_name: "available",
    amenities: "TV, Wi-Fi, Mini Bar, Jacuzzi",
    no_of_person: 4,
    price_per_hour: "$150"
  }
]

let bookingRoom = [];

const createRoom = async (req, res) => {
  try {
    let id = rooms.length ? rooms[rooms.length - 1].room_id + 1 : 1;
    req.body.room_id = id
    rooms.push(req.body)
    await res.status(200).json({ message: "Room Created Successfully", Room: rooms })

  } catch (error) {
    res.status(500).json({ message: 'Internal Server error' })
  }
}

const getRoom = async (req, res) => {
  try {
    await res.status(200).json({ comment: 'Fetched Room Successfully', rooms })
  } catch (error) {
    res.status(500).json({ comment: 'Internal Server Error' })
  }
}

const customerBooking = async (req, res) => {
  try {
    let { customername, bookingdate, starttime, endtime, room_id } = req.body;
    let room = rooms.filter((e) => e.room_status === 'available' && e.room_id == room_id)
    if ((!room)) {
      return res.status(400).json({ message: 'Room is not available' })
    }
    else {
      let bookingRoomDate = bookingRoom.filter((room) => room.bookingdate === bookingdate)
      if (bookingRoomDate.length > 0) {
        return res.status(400).json({ message: 'Date is not availble' });
      }
      else {
        let booking = {
          customername,
          starttime,
          endtime,
          Date: bookingdate,
          room_id,
          booking_id: bookingRoom.length + 1,
          bookingdate: bookingdate,
          room_status: 'booked'
        }
        bookingRoom.push(booking)
        return res.status(200).json({message: 'You have successfully booked the room. Enjoy your stay!!!', BookingRoom: bookingRoom})
      
      }


    }

  } catch (error) {
    console.log('Error in Customer Booking Function')
    res.status(500).json({message: 'Internal Server Error'})
  }
}

const bookedRoom = async (req, res) => {
  try {
    res.status(200).json({booked_data: bookingRoom})
    
  } catch (error) {
    res.status(500).json({message: "Internal Server Error"})
  }
}


const getCustomerRoomData = async (req, res) => { 
  try {
    const customerList = bookingRoom.map((booking) => {
      const room = rooms.find((r) => r.room_id === booking.room_id)
      return {
        Customer_name: booking.customername,
        Room_name: room.room_name,
        Date: booking.Date,
        Start_time: booking.starttime,
        End_time: booking.endtime
      }
    })
    await res.status(200).json({ message: 'Fetched Customer Data with Room details', customerList })
    
  } catch (error) {
    console.log(error);
  }
}

const bookingCount = async (req, res) => {
  try {
    // const { customername } = req.params;
    // const customerBookedCount = bookingRoom.filter((e) => {
      //   console.log(e.customername);
      //   e.customername === customername
      
    // })
    // console.log(customerBookedCount);
    // res.status(200).json({
      //   message: 'Fetched Customer Booing data with count',
      //   customername,
      //   booking_count: customerBookedCount.length,
      //   bookings: customerBookedCount
      // })
      // const bookingCount = async (req, res) => {
        //   try {
          const { customername } = req.params;
          console.log(customername);
          const customerBookedCount = bookingRoom.filter((booking) => booking.customername === customername);
          console.log('Filtered bookings:', customerBookedCount);
          res.status(200).json({
            message: 'Fetched Customer Booking Data with Count',
            customername,
          booking_count: customerBookedCount.length
        });

      

  } catch (error) {
    res.status(500).json({message: 'Internal Server Error'})
    console.log(error);
  }
}


export { createRoom, getRoom, customerBooking, bookedRoom, getCustomerRoomData, bookingCount }