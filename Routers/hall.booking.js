import express from 'express';
import { bookedRoom, bookingCount, createRoom, customerBooking, getCustomerRoomData, getRoom } from '../Controllers/Booking.js';
// import BookingHall from '../Controllers/Booking.js'
const router = express.Router()


// router.get('/', Home.homepage)

router.use('/createroom', createRoom)
router.use('/getroom', getRoom)
router.use('/bookroom', customerBooking)
router.use('/getbookedroom', bookedRoom)
router.use('/getcustomerdata', getCustomerRoomData)
router.use('/getbookingcount/:customername', bookingCount)



export default router;