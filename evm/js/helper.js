// https://github.com/ethereumjs/ethereumjs-vm/
// https://github.com/ethereumjs/ethereumjs-vm/tree/master/examples/run-transactions-simple
// VM has a lot of consensus breaking bugs 🐞 · Issue #167 · ethereumjs/ethereumjs-vm https://github.com/ethereumjs/ethereumjs-vm/issues/167
const VM = require('ethereumjs-vm')
const opcodes = require('ethereumjs-vm/lib/opcodes.js')
// https://github.com/ethereumjs/ethereumjs-vm/blob/master/examples/static-code-analysis.js
function nameOpCodes(raw) {
  var r = []
  var pushData

  for (var i = 0; i < raw.length; i++) {
    var pc = i
    var curOpCode = opcodes(raw[pc], true).name

    // no destinations into the middle of PUSH
    if (curOpCode.slice(0, 4) === 'PUSH') {
      var jumpNum = raw[pc] - 0x5f
      pushData = raw.slice(pc + 1, pc + jumpNum + 1)
      i += jumpNum
    }

    r.push('[' + pad(pc, roundLog(raw.length, 10)) + ' ' + curOpCode + ' ' + pushData.toString('hex') + ']')

    pushData = ''
  }
  return r
}

function pad(num, size) {
  var s = num + ''
  while (s.length < size) s = '0' + s
  return s
}

function log(num, base) {
  return Math.log(num) / Math.log(base)
}

function roundLog(num, base) {
  return Math.ceil(log(num, base))
}

function runCode(codeObj) {
  //create a new VM instance
  var vm = new VM()
  var codeBuf = Buffer.from(codeObj.code, 'hex')
  var dataInput = Buffer.from(codeObj.data, 'hex')
  var steps = []
  // https://github.com/ethereumjs/ethereumjs-vm/blob/master/README.md#step
  vm.on('step', function (data) {
    //console.log(data)
    var opcode = data.opcode
    var r = {
      pc: data.pc,
      stack: data.stack.map((v) => { return v.toString('hex') }),
      memory: data.memory.join(','),
      opcode: {
        name: opcode.name,
        fee: opcode.fee,
        in: opcode.in,
        out: opcode.out
      }
    }
    steps.push(r)
  })
  vm.runCode({
    code: codeBuf,
    data: dataInput,
    gasLimit: Buffer.from('ffffffff', 'hex')
  }, function (err, results) {
    var r = {
      name: codeObj.name,
      code: codeObj.code,
      data: codeObj.data,
      disasm: nameOpCodes(codeBuf).join(','),
      steps: steps,
      return: results.return.toString('hex'),
      gasUsed: results.gasUsed.toString()
    }
    console.log(JSON.stringify(r, null, 2))
  })
}


module.exports = {
  nameOpCodes : nameOpCodes,
  runCode : runCode
};