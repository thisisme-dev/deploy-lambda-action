import * as core from '@actions/core'
import { run } from './run'

const main = async (): Promise<void> => {
  const outputs = await run({
    functionName: core.getInput('function-name', { required: true }),
    imageURI: core.getInput('image-uri') || undefined,
    zipPath: core.getInput('zip-path') || undefined,
    aliasName: core.getInput('alias-name'),
    aliasDescription: core.getInput('alias-description'),
    environmentVariables: core.getInput('environment-variables'),
  })
  core.setOutput('function-version', outputs.functionVersion)
  core.setOutput('function-version-arn', outputs.functionVersionARN)
  core.setOutput('function-alias-arn', outputs.functionAliasARN)
}

main().catch((e: Error) => {
  core.setFailed(e)
  console.error(e)
})
