const AUTOGENERATED_VERSION_REGEX =
    /<!-- AUTOGENERATED VERSION START -->.*?<!-- AUTOGENERATED END -->/gs
const VERSION_REGEX = /v\d+\.\d+\.\d+|[\da-f]{40}/g
const DEV_VERSION_REGEX = /^\d+.\d+.\d+-dev\.(?<gitRef>\w+)$/

function applyVersionedText(text, packageJson) {
    const versionFromPackageJson = JSON.parse(packageJson).version
    const resolvedVersion =
        versionFromPackageJson.match(DEV_VERSION_REGEX)?.groups.gitRef ||
        'v' + versionFromPackageJson
    const hasPartsToUpdate = !resolvedVersion || AUTOGENERATED_VERSION_REGEX.test(text)

    const updatedText = text.replace(AUTOGENERATED_VERSION_REGEX, (match) =>
        match.replace(VERSION_REGEX, resolvedVersion),
    )

    return {
        hasPartsToUpdate,
        updatedText,
    }
}

module.exports = { applyVersionedText }