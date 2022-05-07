import { render } from "@testing-library/react"
import BookDetail from "./BookDetail"

describe('BookDetail', () => {
  const book = {
    name: 'Refactoring',
    id: 1,
    description: "Martin Fowler's Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software."
  }

  it('renders title', () => {
    const props = {
      book
    }

    const { container } = render(<BookDetail {...props} />)

    const title = container.querySelector('.book-title')
    expect(title?.innerHTML).toEqual(props.book.name)
  })

  it('renders description', () => {
    const props = {
      book
    }

    const { container } = render(<BookDetail {...props} />)

    const description = container.querySelector('p.book-description')
    expect(description?.innerHTML).toEqual(props.book.description)
  })

  it('displays the book name when no description was given', () => {
    const props = {
      book: {
        name: 'Refactoring',
        id: 1,
      }
    }

    const { container } = render(<BookDetail {...props} />)

    const description = container.querySelector('p.book-description')
    expect(description?.innerHTML).toEqual(props.book.name)
  })

  it('Shows *more* link when description is too long', () => {
    const props = {
      book: {
        name: 'Refactoring',
        id: 1,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolor, rem delectus nulla aperiam laudantium nostrum commodi maiores quisquam reprehenderit! Sint saepe totam, corrupti numquam praesentium explicabo hic, ratione delectus exercitationem dolores, tempore eligendi esse perferendis! Eos eligendi ad nihil, amet aspernatur repudiandae beatae et debitis quam voluptatibus laudantium minus nisi velit rerum obcaecati, nesciunt voluptatum dicta dolore eius excepturi! Inventore deleniti placeat fuga excepturi sit exercitationem blanditiis, error facilis culpa incidunt itaque accusamus non consequuntur obcaecati tempore. Sunt quibusdam autem corrupti praesentium voluptatum corporis, tenetur unde rem eos soluta, repellat illo excepturi, harum minus voluptas ipsam aliquid impedit voluptate officiis dolorem. Eos impedit neque omnis. Aspernatur fugiat, sit nam, enim ullam repudiandae totam quaerat nesciunt ad possimus odio dolores hic amet, doloremque obcaecati quis neque velit. Deleniti libero fuga perferendis asperiores reiciendis? Commodi odit alias repudiandae officiis nostrum soluta tempore eveniet, reprehenderit iure ut accusamus tenetur distinctio aliquam eius quas debitis dolorum ex veritatis, culpa nesciunt odio optio eum recusandae! Similique eligendi ipsam, magni, consequatur possimus dolor assumenda asperiores distinctio commodi delectus ab harum ad culpa sit quos molestiae ipsa inventore saepe! Fugit, minus, itaque ea ex accusantium voluptatem odit atque sunt minima magni et eius quod at totam corporis dolor doloremque corrupti, vel non aliquam quasi quaerat consequatur in! Culpa quas rem, nesciunt distinctio esse eos quo sunt pariatur voluptate. At ex doloribus reprehenderit, odio sed illum non modi nam! Doloribus culpa quasi dicta voluptatem sit cumque molestias, ad ea! Sit consectetur tempore ut reiciendis dolore in voluptatibus dicta a beatae quaerat deserunt ducimus, ab, voluptates quas! Blanditiis expedita sed nesciunt quis facere animi eligendi rerum ullam nihil obcaecati, aliquid sit qui. Enim dolore, provident nisi maiores rerum quos tenetur, cumque, quas impedit dignissimos porro. Natus neque dolore repellendus corrupti veniam voluptatem laborum ipsa ea velit? Earum dignissimos voluptate quae perferendis iusto provident distinctio officia minima esse porro non excepturi fuga dolores ut consectetur, magnam vel aspernatur eaque voluptatum dicta. Odit aliquam tenetur debitis! Nobis quis totam odio doloribus non. Tenetur quibusdam ullam quasi aut commodi tempora labore repellat velit rem sit ad fugit, voluptates ea iusto, atque possimus incidunt necessitatibus aliquam voluptatum reprehenderit aliquid cupiditate ducimus? Reprehenderit minima error hic possimus quod soluta voluptatem. Totam facere dicta aut ducimus eius quasi. Inventore similique voluptatibus adipisci, in cumque quos ipsam vero debitis optio ea repellat ut autem nihil dolores sint eos incidunt veniam officia. Facere incidunt quaerat aut tempore, nesciunt modi sunt illum vero ipsa quod et dolores nihil. Corporis sed est ipsam, tempora perspiciatis cupiditate numquam, atque, optio facilis repellendus magnam ex enim ratione rerum quam iure necessitatibus repudiandae tenetur dolorum sit dolores! Vero voluptas dolores veritatis error, adipisci obcaecati itaque rerum maiores sequi deserunt tempora impedit ullam, non quos facilis laudantium dignissimos temporibus, nesciunt eaque nihil voluptatibus illum ducimus eos! Libero possimus totam delectus quaerat incidunt aperiam, molestiae quas sit dolore voluptates voluptatibus consequatur. Minima necessitatibus doloribus fuga labore deserunt assumenda facilis, cumque veritatis voluptatem recusandae quasi animi molestiae, nobis minus, iure et quidem asperiores quisquam.',
      }
    }

    const { container } = render(<BookDetail {...props} />)

    const link = container.querySelector('a.show-more')
    const title = container.querySelector('p.book-description')

    expect(link?.innerHTML).toEqual('Show more')
    expect(title?.innerHTML).toEqual(props.book.description.slice(0, 300) + '...')
  })
})
