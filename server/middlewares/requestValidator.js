export default function requestValidator(req, res, next) {
    if (!req.body || Object.keys(req.body).length === 0) return

    let messages = [];

    Object.entries(req.body).forEach((a,) => {
        if (typeof a[1] == 'object') return;
        if (a[1] == null || a[1].toString()?.replace(/\s/g, '') == "") {
            messages.push(`${a[0]?.toLowerCase()} is required`);
        }
    });

    if (!messages.length) next()
    else return res.json({ success: false, message: messages });
}

