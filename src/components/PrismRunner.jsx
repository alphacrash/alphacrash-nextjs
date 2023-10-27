'use client';

import { useEffect, useState } from 'react';

const PrismRunner = () => {
    const [prismIsReady, setPrismIsReady] = useState(false);

    useEffect(() => {
        const languages = ['bash', 'java', 'javascript', 'python', 'sql'];

        import('prismjs').then((Prism) => {
            Promise.all(
                languages.map((language) =>
                    import(`prismjs/components/prism-${language}`).then(() => {
                        return Prism;
                    })
                )
            ).then((prisms) => {
                if (prisms.every((p) => !!p)) {
                    setPrismIsReady(true); // Set a flag to indicate Prism is ready
                }
            });
        });
    }, []);

    useEffect(() => {
        if (prismIsReady) {
            Prism.highlightAll();
        }
    }, [prismIsReady]);

    return <></>;
};

export default PrismRunner;
