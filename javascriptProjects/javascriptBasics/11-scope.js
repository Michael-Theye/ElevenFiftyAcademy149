// ! SCOPE: heiracrchy of variables in our cade (access rights for variables)
// GLOBAL scope (Parent scope)
// LOCAL scope (child scope)

let global ="Earth"

function scopeExample() {
    let local ="Indy"
    console.log(local)
    console.log(`I'm in ${local} which is a part of ${global}`)
    // TEMPLATE STRINGS (TEMPLATE LITERALS)=''
}

scopeExample()
