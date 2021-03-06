import chalk from 'chalk'
import semver from 'semver'
import childProcess from 'child_process'
import packageConfig from '../package.json'

const versionRequirements = [
  {
    name: `node`,
    currentVersion: semver.clean(process.version),
    versionRequirement: packageConfig.engines.node
  },
  {
    name: `npm`,
    currentVersion: childProcess.execSync(`npm --version`).toString().trim(),
    versionRequirement: packageConfig.engines.npm
  }
]

export default () => {
  let warnings = []

  for (let i = 0; i < versionRequirements.length; i++) {
    let mod = versionRequirements[i]

    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(`
        ${mod.name}: ${chalk.red(mod.currentVersion)} should be ${chalk.green(mod.versionRequirement)}
      `)
    }
  }

  if (warnings.length) {
    console.log(`
     \n${chalk.yellow(`To use this template, you must update following to modules:`)}\n
    `)

    for (let i = 0; i < warnings.length; i++) {
      let warning = warnings[i]

      console.log(`  ${warning}`)
    }

    console.log(`\n`)

    process.exit(1)
  }
}
