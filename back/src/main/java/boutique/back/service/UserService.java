package boutique.back.service;

import boutique.back.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    List<User> userList();

}
