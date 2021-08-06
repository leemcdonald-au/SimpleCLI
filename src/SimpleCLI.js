// The following is fine: -- defines a boolean, - a variable that expects a value to follow it.
// --boolean -variable has a value that can include spaces --anotherbool --finalbool -variable2 single-value

// Symbols.
const s = { exec: Symbol('exec'), script: Symbol("script") }

// Export an object to parse CLI.
export default class SimpleCLI {
    constructor() {
        // Binary executable and path to script.
        this[s.exec]    = process.argv[0]
        this[s.script]  = process.argv[1]

        // Last known variable found in the string.
        let last_var = null

        // Break out the provided arguments and parse.
        const args = process.argv.splice(2)
        args.forEach(arg => {
            // If the boolean is present, assume it's true. Otherwise it'd be false, hey?
            if(arg.startsWith('--')) this[arg.substring(2)] = true

            // Found a variable, keep going until we find another.
            else {
                if(arg.startsWith('-')) {
                    const fix   = arg.substring(1)
                    this[fix]   = null
                    last_var    = fix
                }

                // Add to the value of the last found variable.
                else this[last_var] = this[last_var] ? `${this[last_var]} ${arg}` : isNaN(arg) ? arg : Number(arg)
            }
        })
    }

    // Getters.
    get EXEC()      { return this[s.exec] }
    get SCRIPT()    { return this[s.script] }
}