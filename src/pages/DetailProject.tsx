import ButtonAction from '../components/shared/ButtonAction';
import Heading from '../components/shared/Heading';

const DetailProject = () => {
  return (
    <section className="detailproject-section pb-5">
      <Heading title="Detail Proyek" />
      <hr className="text-secondary" />

      <div className="detail-project-container">
        <img
          className="detail-project__image"
          src="/images/sertifikat_magang_msib_3.png"
        />

        <div className="detail-project__content">
          <Heading title="Magang MSIB Batch 5" />
          <div className="detail-project__content-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius est
            laborum quibusdam laudantium, eligendi eos dignissimos voluptatibus
            nobis repellendus cupiditate nisi alias. Delectus, nihil! Porro
            corrupti, ipsam ea maxime, repudiandae rem id quod harum dicta
            soluta corporis! Iusto maiores, quaerat ratione, eius totam
            perferendis officia laudantium dicta, fuga incidunt cumque
            asperiores voluptatem quo ducimus eos libero velit molestias vero
            id. Molestiae illum dolorem iusto tempore beatae delectus, quod
            aliquid architecto animi voluptates. Sapiente incidunt reiciendis
            exercitationem fugiat voluptates! Quam saepe beatae magni rerum cum
            magnam sapiente repudiandae ipsum, perferendis, delectus nam alias.
            Autem, ipsum. Illum doloremque dicta asperiores beatae molestias.
          </div>

          <div className="detail-project__content-action">
            <ButtonAction
              isBlank
              isDownload={false}
              name="Tampilkan Proyek"
              links="https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe"
              icons=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailProject;
