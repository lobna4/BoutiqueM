package boutique.back.model;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name = "produit")
public class Produit {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private float prix;

}
