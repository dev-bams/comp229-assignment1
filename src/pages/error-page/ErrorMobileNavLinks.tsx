import NavLink from "../../components/navbar/NavLink";

function MobileNavLinks() {
  return (
    <div>
      <div className="flex max-sm:gap-5 gap-8 items-center justify-center p-4">
        <NavLink link="https://github.com/dev-bams" linkName="github" />
        <NavLink
          link="https://www.linkedin.com/in/khaleed-opeloyeru-064457259/"
          linkName="linkedin"
        />
        <NavLink
          link="https://www.instagram.com/iamkbams/"
          linkName="instagram"
        />
        <NavLink link="https://twitter.com/iamkbams" linkName="x" />
        <NavLink
          link="https://bundleup.us/khaleed"
          linkName="bundleup"
        />
      </div>
    </div>
  );
}

export default MobileNavLinks;
