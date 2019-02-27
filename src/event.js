const emitter = require('../lib/events')
const utils = require('util')

function Bell() {
  emitter.call(this)
}
utils.inherits(Bell, emitter)

let bell = new Bell()
function studentIntoClassroom(things, num){
  console.log(`学生带着${things}进入${num}教室`)
}
function teacherIntoClassroom(things, num) {
  console.log(`讲师带着${things}进入${num}教室`)
}
function masterIntoClassroom(things, num) {
  console.log(`校长带着${things}进入${num}教室`)
}
bell.setMaxListeners(5)
bell.on('响', studentIntoClassroom)
bell.on('响', teacherIntoClassroom)
bell.on('响', studentIntoClassroom)
bell.on('响', teacherIntoClassroom)
bell.on('响', studentIntoClassroom)
bell.on('响', teacherIntoClassroom)
bell.on('响', studentIntoClassroom)
bell.on('响', teacherIntoClassroom)
bell.on('响', studentIntoClassroom)
bell.on('响', teacherIntoClassroom)
bell.on('响', studentIntoClassroom)
bell.on('响', teacherIntoClassroom)
bell.on('响', studentIntoClassroom)
bell.on('响', teacherIntoClassroom)
bell.on('响', studentIntoClassroom)
bell.on('响', teacherIntoClassroom)
bell.on('响', studentIntoClassroom)
bell.on('响', teacherIntoClassroom)
bell.on('响', studentIntoClassroom)
bell.on('响', teacherIntoClassroom)
bell.on('响', studentIntoClassroom)
bell.on('响', teacherIntoClassroom)
bell.on('响', studentIntoClassroom)
bell.on('响', teacherIntoClassroom)
bell.on('响', studentIntoClassroom)
bell.on('响', teacherIntoClassroom)
bell.on('响', studentIntoClassroom)
bell.on('响', teacherIntoClassroom)
bell.on('响', studentIntoClassroom)
bell.on('响', teacherIntoClassroom)
bell.on('响', studentIntoClassroom)
bell.on('响', teacherIntoClassroom)
bell.once('响', masterIntoClassroom)

bell.emit('响', '书', 302)
console.log('=================')
bell.emit('响', '书', 301)
// bell.removeAllListener('响')