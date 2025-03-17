import { AES, enc } from 'crypto-js';

function hash(plainStr: string | null | undefined, nonce: string | null): string | null {
    if (!plainStr) {
        return null;
    }

    const plainDigest = nonce + (process.env.REACT_APP_KEY || "");

    return AES.encrypt(plainStr, plainDigest).toString();
}

function deHash(hashedStr: string | null | undefined, nonce: string | null): string | null {
    if (!hashedStr) {
        return null;
    }
    const plainDigest = nonce + (process.env.REACT_APP_KEY || "");

    return AES.decrypt(hashedStr, plainDigest).toString(enc.Utf8);
}

export { hash, deHash };
