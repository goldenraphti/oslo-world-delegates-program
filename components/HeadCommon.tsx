export const HeadCommon = () => {
  return (
    <>
      <link rel='icon' href='/oslo_world_favicon_2023.png' />

      <meta
        property='og:url'
        content='https://oslo-world-delegates-program.vercel.app/'
      />
      <meta property='og:type' content='website' />
      <meta
        property='og:image'
        content='https://oslo-world-delegates-program.vercel.app/opengraph-image.png'
      />

      <meta name='twitter:card' content='summary_large_image' />
      <meta
        property='twitter:domain'
        content='oslo-world-delegates-program.vercel.app'
      />
      <meta
        property='twitter:url'
        content='https://oslo-world-delegates-program.vercel.app/'
      />
      <meta
        name='twitter:image'
        content='https://oslo-world-delegates-program.vercel.app/opengraph-image.png'
      />
      {/* test counter.dev analytics */}
      <script
        async
        src='https://cdn.counter.dev/script.js'
        data-id='0466ff03-46a9-4faa-a519-cfa045edc2c7'
        data-utcoffset='1'
      ></script>
    </>
  );
};
