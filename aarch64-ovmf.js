if (typeof Module === 'undefined') {
    Module = {};
}
Module['arguments'] = [
    '-nographic', '-M', 'virt', '-cpu', 'cortex-a57',
    '-accel', 'tcg,tb-size=500',
    '-L', '/pack-uefi/',
    '-bios', '/pack-uefi/QEMU_EFI.fd',
    '-cdrom', '/pack-cdrom/test.iso',
    '-nic', 'none'
];
Module['locateFile'] = function(path, prefix) {
    return '/qemu-wasm-uefi/images/aarch64-ovmf/' + path;
};
Module['mainScriptUrlOrBlob'] = '/qemu-wasm-uefi/images/aarch64-ovmf/out.js'
