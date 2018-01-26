'use strict'

/* global describe it */

const expect = require('chai').expect
const lib = require('../src/index')

describe('find in object', () => {
    const compare = (a, b) => a === b
    const obj = {
        a: 'aa',
        b: 'bb',
        c: 'cc',
        d: [{
            key: 'aa',
            val: 'bb'
        },
        {
            key: 'aa',
            val: 'bb'
        },
        {
            key: 'aa',
            val: 'cc'
        }
        ]
    }

    it('finds correct value and terminates with done === true', () => {
        const out = []
        const whenFound = key => {
            out.push(key)
        }
        lib.findValue(obj, 'bb', compare, whenFound)
        expect(out).to.deep.equal([{
            loc: 'b',
            val: 'bb'
        },
        {
            loc: 'd.0.val',
            val: 'bb'
        },
        {
            loc: 'd.1.val',
            val: 'bb'
        }
        ])
        expect(out.length).to.equal(3)
    })

    it('finds multiple values and terminates with done === true', () => {
        const out = []
        const whenFound = key => {
            out.push(key)
        }
        lib.findValues(obj, ['bb',
            'cc'], compare, whenFound)
        expect(out).to.deep.equal([{
            loc: 'b',
            val: 'bb'
        },
        {
            loc: 'd.0.val',
            val: 'bb'
        },
        {
            loc: 'd.1.val',
            val: 'bb'
        },
        {
            loc: 'c',
            val: 'cc'
        },
        {
            loc: 'd.2.val',
            val: 'cc'
        }
        ])
        expect(out.length).to.equal(5)
    })
})
